"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog-posts";
import { notFound } from "next/navigation";

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
      <section className="pt-28 pb-12 bg-muted/50 border-b border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Blog
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-forest-500 text-white capitalize">
                {post.category}
              </span>
              {post.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-muted text-xs text-muted-foreground">
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-display mb-4">{post.title}</h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
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
              <span>oleh {post.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden mb-8">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <article className="space-y-3 text-muted-foreground leading-relaxed">
              {post.content.split("\n").map((line, i) => {
                if (line.startsWith("## ")) {
                  return <h2 key={i} className="text-xl font-bold font-display mt-8 mb-3 text-foreground">{line.replace("## ", "")}</h2>;
                }
                if (line.startsWith("### ")) {
                  return <h3 key={i} className="text-lg font-bold font-display mt-6 mb-2 text-foreground">{line.replace("### ", "")}</h3>;
                }
                if (line.match(/^\d+\.\s/)) {
                  return <li key={i} className="ml-4 mb-1 list-decimal">{line.replace(/^\d+\.\s/, "")}</li>;
                }
                if (line.startsWith("- ")) {
                  return <li key={i} className="ml-4 mb-1 list-disc">{line.replace("- ", "")}</li>;
                }
                if (line.trim() === "") return <div key={i} className="h-2" />;
                return <p key={i} className="mb-2">{line}</p>;
              })}
            </article>

            <div className="mt-10 pt-6 border-t border-border">
              <Link href="/blog">
                <button className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="h-4 w-4" />
                  Kembali ke Blog
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
