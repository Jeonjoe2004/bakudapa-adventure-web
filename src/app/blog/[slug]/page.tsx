import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import type { Metadata } from "next";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return { title: "Tidak Ditemukan" };
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: `${post.title} | Bakudapa Adventure`,
        description: post.excerpt,
        images: [{ url: post.imageUrl, width: 1200, height: 630, alt: post.title }],
      },
    };
  });
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function renderContent(content: string) {
  return content.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return <h2 key={i} className="text-2xl font-bold font-display mt-8 mb-4">{block.replace("## ", "")}</h2>;
    }
    if (block.includes("\n- ") || block.startsWith("- ")) {
      const items = block.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul key={i} className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
          {items.map((item, j) => (
            <li key={j}>{renderInline(item.replace(/^- /, ""))}</li>
          ))}
        </ul>
      );
    }
    if (/^\d+\./.test(block)) {
      const items = block.split("\n").filter((l) => /^\d+\./.test(l));
      return (
        <ol key={i} className="list-decimal list-inside space-y-1 text-muted-foreground mb-4">
          {items.map((item, j) => (
            <li key={j}>{renderInline(item.replace(/^\d+\.\s*/, ""))}</li>
          ))}
        </ol>
      );
    }
    return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{renderInline(block)}</p>;
  });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px]">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm mb-4 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Blog
            </Link>
            <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-forest-500 text-white capitalize mb-3">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold font-display text-white mb-3">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime} menit baca
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <article className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground italic mb-8 pb-8 border-b border-border">
              {post.excerpt}
            </p>

            <div className="prose prose-lg max-w-none">
              {renderContent(post.content)}
            </div>

            {post.tags.length > 0 && (
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 p-6 rounded-xl bg-muted/50 border border-border flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-forest-500 flex items-center justify-center text-white font-bold text-lg shrink-0">
                BA
              </div>
              <div>
                <p className="font-medium">{post.author}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(post.publishedAt).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
