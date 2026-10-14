<script setup>
definePageMeta({
  layout :'index',
})
import {
  LayoutGrid,    // dashboard icon
  BookOpen,      // book icon
  ClipboardList, // clipboard icon
  FolderCheck,   // folder with check
  GraduationCap, // grad cap icon
  Calendar,      // calendar icon
  Settings       // gear icon
} from 'lucide-vue-next'
</script>

<template>
  <div class="shell">
    <aside class="side">
      <strong class="brand">
        Turnly
      </strong>

      <nav>
        <NuxtLink to="/instructor/dashboard" exact-active-class="active">
          <LayoutGrid :size="18" />
          <span>Dashboard</span>
        </NuxtLink>

        <NuxtLink to="/instructor/mycourses" active-class="active">
          <BookOpen :size="18" />
          <span>My Courses</span>
        </NuxtLink>

        <NuxtLink to="/instructor/assignments" active-class="active">
          <ClipboardList :size="18" />
          <span>Assignments</span>
        </NuxtLink>

        <NuxtLink to="/instructor/submissions" active-class="active">
          <FolderCheck :size="18" />
          <span>Submissions</span>
        </NuxtLink>

        <NuxtLink to="/instructor/gradebook" active-class="active">
          <GraduationCap :size="18" />
          <span>GradeBook</span>
        </NuxtLink>

        <NuxtLink to="/instructor/calendar" active-class="active">
          <Calendar :size="18" />
          <span>Calendar</span>
        </NuxtLink>

        <NuxtLink to="/instructor/settings" active-class="active">
          <Settings :size="18" />
          <span>Settings</span>
        </NuxtLink>
      </nav>
    </aside>

    <main class="main">
      <slot />
    </main>
  </div>
</template>

<style src="~/assets/css/layout.css" scoped></style>