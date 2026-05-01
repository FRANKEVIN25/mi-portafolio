<template>
  <section id="skills" class="overflow-hidden py-12">
    <div
      class="after:to-background-alt/50 after:from-background-alt relative py-18 after:absolute after:top-0 after:left-1/2 after:z-0 after:h-full after:w-[140%] after:-translate-x-1/2 after:-skew-3 after:bg-gradient-to-l md:py-32"
    >
      <div class="relative z-2 container mx-auto px-4">
        <Title class="mb-8" v-animate-on-view>
          {{ t("skills.title") }}
        </Title>

        <ul class="grid gap-16 md:grid-cols-2">
          <li
            v-for="section in skillSections"
            :key="section.key"
            class="flex flex-col justify-between"
          >
            <div>
              <h3 class="mb-4 text-3xl font-bold text-white" v-animate-on-view>
                {{ t(section.title) }}
              </h3>
              <p class="mb-8 text-lg text-gray-300" v-animate-on-view>
                {{ t(section.description) }}
              </p>
            </div>
            <ul
              class="flex flex-wrap justify-center gap-4 sm:justify-start"
              v-animate-on-view
            >
              <li v-for="tech in section.stack" :key="tech.title">
                <TechIcon :icon="tech.icon" :title="tech.title" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import TechIcon from "../TechIcon.vue";
import Title from "../ui/Title.vue";

const { t } = useI18n();

const stacks = {
  backend: [
    { icon: "devicon-django-plain colored", title: "Django" },
    { icon: "devicon-django-plain colored", title: "Django REST" },
    { icon: "devicon-python-plain colored", title: "Python" },
    { icon: "", title: "Celery" },
    { icon: "devicon-redis-plain colored", title: "Redis" },
  ],
  frontend: [
    { icon: "devicon-svelte-plain colored", title: "SvelteKit" },
    { icon: "devicon-react-original colored", title: "React" },
    { icon: "devicon-typescript-plain colored", title: "TypeScript" },
    { icon: "devicon-tailwindcss-original colored", title: "Tailwind CSS" },
    { icon: "devicon-html5-plain colored", title: "HTML5" },
    { icon: "devicon-css3-plain colored", title: "CSS3" },
  ],
  databases: [
    { icon: "devicon-postgresql-plain colored", title: "PostgreSQL" },
    { icon: "devicon-mysql-original colored", title: "MySQL" },
    { icon: "devicon-supabase-plain colored", title: "Supabase" },
    { icon: "devicon-mongodb-plain-wordmark colored", title: "MongoDB" },
  ],
  erp: [
    { icon: "", title: "Odoo 18" },
    { icon: "", title: "Cloudinary" },
    { icon: "", title: "EmailJS" },
    { icon: "", title: "JWT" },
  ],
  devops: [
    { icon: "devicon-git-plain colored", title: "Git" },
    { icon: "devicon-github-original", title: "GitHub" },
    { icon: "devicon-docker-plain colored", title: "Docker" },
    { icon: "devicon-amazonwebservices-plain-wordmark colored", title: "AWS S3" },
    { icon: "", title: "CloudFront" },
    { icon: "", title: "Route 53" },
    { icon: "devicon-vercel-original colored", title: "Vercel" },
  ],
  design: [
    { icon: "devicon-figma-plain colored", title: "Figma" },
    { icon: "devicon-notion-plain colored", title: "Notion" },
    { icon: "", title: "Linear" },
    { icon: "devicon-jira-plain colored", title: "Jira" },
  ],
};

const skillSections = [
  {
    key: "backend",
    title: "skills.backend.title",
    description: "skills.backend.description",
    stack: stacks.backend,
  },
  {
    key: "frontend",
    title: "skills.frontend.title",
    description: "skills.frontend.description",
    stack: stacks.frontend,
  },
  {
    key: "databases",
    title: "skills.databases.title",
    description: "skills.databases.description",
    stack: stacks.databases,
  },
  {
    key: "erp",
    title: "skills.erp.title",
    description: "skills.erp.description",
    stack: stacks.erp,
  },
  {
    key: "devops",
    title: "skills.devops.title",
    description: "skills.devops.description",
    stack: stacks.devops,
  },
  {
    key: "design",
    title: "skills.design.title",
    description: "skills.design.description",
    stack: stacks.design,
  },
];
</script>
