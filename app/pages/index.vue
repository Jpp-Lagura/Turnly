<script setup>
import {
  Upload, Bell, MessageSquareText, TrendingUp,
  UserPlus, FileUp, Award, Zap, Star, ArrowRight,
  Instagram, Linkedin, Twitter
} from 'lucide-vue-next'

definePageMeta({
  layout: 'landing'
})

</script>

<template>
  <div class="landing">
    <!-- NAVBAR -->
    <header class="navbar">
      <div class="nav-brand">
        <span class="brand-mark">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 16V4M7 9l5-5 5 5M5 20h14" />
          </svg>
        </span>
        Turnly
      </div>

      <nav class="nav-links">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">How it Works</a>
        <a href="#">Contact</a>
      </nav>

      <div class="nav-actions">
        
        <NuxtLink to="/login&sign_up/auth_page" class="btn-text">Login</NuxtLink>
        <a href="#" class="btn-primary">Sign Up</a>
      </div>
    </header>

    <!-- HERO -->
    <section class="hero">
      <h1>Submit, Track, and Grade<br />Assignments, All in One Place</h1>
      <p>
        From first upload to final grade, SubmitHub keeps students and
        instructors in sync. Stay organized, meet deadlines, and leave room
        for better learning.
      </p>

      <div class="hero-actions">
        <a href="#" class="btn-primary">
          <Zap :size="16" />
          Get Started
        </a>
        <a href="#" class="btn-text">Learn More</a>
      </div>

      <div class="trust-row">
        <div class="avatar-stack">
          <span class="mini-avatar">J</span>
          <span class="mini-avatar">A</span>
          <span class="mini-avatar">M</span>
        </div>
        <span>Made for real campus life</span>
      </div>
    </section>
        <!-- Submit-->
    <section class="submit-preview">
      <div class="submit-card">
        <div class="submit-header">
          <h3>Submit Assignment</h3>
          <span class="submit-badge">Due Oct 13, 2026</span>
        </div>

        <div class="submit-body">
          <div class="assignment-info">
            <div class="assignment-icon">
              <FileUp :size="22" />
            </div>
            <div>
              <div class="assignment-title">Database Design Report</div>
              <div class="assignment-meta">CS 201 · 2.4 MB · PDF</div>
            </div>
          </div>

          <div class="upload-zone">
            <div class="upload-place">
              <Upload :size="24" class="upload-icon" />
              <p class="upload-label">Drag files here or click to browse</p>
              <span class="upload-sub">PDF, DOCX, PNG up to 10 MB</span>
            </div>
          </div>

          <div class="submit-actions">
            <a href="#" class="btn-primary btn-large">
              <Award :size="18" />
              Submit Work
            </a>
            <a href="#" class="btn-secondary">Save Draft</a>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="features">
      <span class="eyebrow">EVERYTHING YOU NEED</span>
      <h2>Stay focused on what matters</h2>
      <p class="section-sub">A smarter way to manage coursework, from start to finish.</p>

      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon icon-purple">
            <Upload :size="18" />
          </div>
          <h3>Easy File Upload</h3>
          <p>Drag, drop, done. Submit documents, slides, and images anywhere in just a few clicks.</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon icon-green">
            <Bell :size="18" />
          </div>
          <h3>Deadline Reminders</h3>
          <p>Know what's due and when. Timely reminders help you stay ahead.</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon icon-blue">
            <MessageSquareText :size="18" />
          </div>
          <h3>Instant Feedback and Grades</h3>
          <p>Get clear, actionable feedback and see your grades as soon as they're ready.</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon icon-orange">
            <TrendingUp :size="18" />
          </div>
          <h3>Progress Tracking</h3>
          <p>See the bigger picture with a simple overview of every course and assignment.</p>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="steps">
      <span class="eyebrow">SIMPLIFIED ON DESIGN</span>
      <h2>Three steps. One clear workflow.</h2>
      <p class="section-sub">No complicated setup. Just a better way to work together.</p>

      <div class="steps-grid">
        <div class="step-card">
          <div class="step-icon">
            <UserPlus :size="20" />
          </div>
          <h3>Create Account</h3>
          <p>Join as a student or instructor and bring your courses into one workspace.</p>
        </div>

        <div class="step-card">
          <div class="step-icon">
            <FileUp :size="20" />
          </div>
          <h3>Submit Assignment</h3>
          <p>Find your assignment, upload your work, and get a submission receipt.</p>
        </div>

        <div class="step-card">
          <div class="step-icon">
            <Award :size="20" />
          </div>
          <h3>Get Graded</h3>
          <p>Receive personalized feedback, track your results, and keep moving forward.</p>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="stats">
      <div class="stat">
        <div class="stat-number">10,000+</div>
        <div class="stat-label">Submissions</div>
      </div>
      <div class="stat">
        <div class="stat-number">500+</div>
        <div class="stat-label">Instructors</div>
      </div>
      <div class="stat">
        <div class="stat-number">98%</div>
        <div class="stat-label">On-Time Rate</div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="testimonials">
      <span class="eyebrow">A LITTLE LOVE FROM CAMPUS</span>
      <h2>Better days start with less busywork</h2>
      <p class="section-sub">For the people learning, teaching, and doing the work.</p>

      <div class="testimonial-grid">
        <div class="testimonial-card">
          <div class="stars">
            <Star v-for="n in 5" :key="n" :size="14" />
          </div>
          <p class="testimonial-text">
            "I finally have one place for every deadline. Uploading my work takes seconds, not a dozen tabs."
          </p>
          <div class="testimonial-author">
            <span class="avatar-photo" style="background:#f2b8b5;">MC</span>
            <div>
              <div class="author-name">Maya Chen</div>
              <div class="author-role">Computer Science student</div>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="stars">
            <Star v-for="n in 5" :key="n" :size="14" />
          </div>
          <p class="testimonial-text">
            "Less time chasing files, more time giving useful feedback. My students always know where they stand."
          </p>
          <div class="testimonial-author">
            <span class="avatar-photo" style="background:#c9b6f2;">EB</span>
            <div>
              <div class="author-name">Dr. Elena Brooks</div>
              <div class="author-role">Computer Science instructor</div>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="stars">
            <Star v-for="n in 5" :key="n" :size="14" />
          </div>
          <p class="testimonial-text">
            "The progress view keeps me motivated, and I never have to wonder whether my assignment went through."
          </p>
          <div class="testimonial-author">
            <span class="avatar-photo" style="background:#b6d4f2;">AR</span>
            <div>
              <div class="author-name">Alex Rivera</div>
              <div class="author-role">Design student</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA BANNER -->
    <section class="cta-wrap">
      <div class="cta-banner">
        <div>
          <h2>Ready to simplify your coursework?</h2>
          <p>Your next semester, a little more organized. Start with SubmitHub.</p>
        </div>
        <a href="#" class="btn-primary">
          <ArrowRight :size="16" />
          Sign Up
        </a>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo">
            <span class="logo-icon-footer">◆</span>
            SubmitHub
          </div>
          <p>A shared space for learning to move forward. Built for students. Designed for instructors.</p>

          <div class="social-row">
            <a href="#"><Instagram :size="15" /></a>
            <a href="#"><Linkedin :size="15" /></a>
            <a href="#"><Twitter :size="15" /></a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Explore</h4>
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">How It Works</a>
          <a href="#">Contact</a>
        </div>

        <div class="footer-col">
          <h4>Resources</h4>
          <a href="#">Help Center</a>
          <a href="#">Student Guide</a>
          <a href="#">Instructor Guide</a>
          <a href="#">Privacy &amp; Security</a>
        </div>

        <div class="footer-col">
          <h4>Let's talk</h4>
          <p class="footer-text">hello@submithub.edu</p>
          <p class="footer-text">Monday–Friday<br />9:00 AM–5:00 PM ET</p>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2026 SubmitHub. All rights reserved.</span>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <span>·</span>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style src="~/assets/css/landing.css" scoped></style>