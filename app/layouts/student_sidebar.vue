<!-- layouts/student_sidebar.vue -->
<script setup>
import {
  LayoutGrid,ClipboardList, FolderCheck, GraduationCap,Settings,
  BookOpen,ArrowBigLeft,
} from 'lucide-vue-next'
</script>

<template>
  <div class="shell">
    <aside class="side">
      <strong class="brand">Turnly</strong>
      <nav>
        <NuxtLink to="/student/dashboard" exact-active-class="active">
          <LayoutGrid :size="18" /> <span>Dashboard</span>
        </NuxtLink>
        <NuxtLink to="/student/courses" exact-active-class="active">
          <BookOpen :size="18" /> <span>Courses</span>
        </NuxtLink>
        <NuxtLink to="/student/assignments" active-class="active">
          <ClipboardList :size="18" /> <span>Assignments</span>
        </NuxtLink>
        <NuxtLink to="/student/submissions" active-class="active">
          <FolderCheck :size="18" /> <span>Submissions</span>
        </NuxtLink>
        <NuxtLink to="/student/grades" active-class="active">
          <GraduationCap :size="18" /> <span>Grades</span>
        </NuxtLink>
        <NuxtLink to="/student/settings" active-class="active">
          <Settings :size="18" /> <span>Settings</span>
        </NuxtLink>
         <NuxtLink to="/" active-class="active">
          <ArrowBigLeft size="18" /> <span>Back To Home</span>
        </NuxtLink>
      </nav>
    </aside>
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<style src="~/assets/css/layout.css" scoped></style>