<script setup>
import { onMounted } from 'vue'

definePageMeta({
  layout: false,
})

function handleLogin() {
  const selectedRole = document.querySelector('input[name="role"]:checked')?.value
  const role = selectedRole === 'instructor' ? 'instructor' : 'student'

  return navigateTo(`/${role}/dashboard`)
}

onMounted(() => {
  var tabs = document.getElementById('tabs');
  var state = { mode: 'login', role: 'student' };

  function $(id) { return document.getElementById(id); }

  // Updates the layout to match the selected tab (log in / sign up) and role
  function render() {
    var isLogin = state.mode === 'login';

    tabs.setAttribute('data-mode', state.mode);
    ['login', 'signup'].forEach(function (m) {
      var t = $('tab-' + m);
      t.setAttribute('aria-selected', String(state.mode === m));
      t.tabIndex = state.mode === m ? 0 : -1;
    });
    $('panel').setAttribute('aria-labelledby', 'tab-' + state.mode);

    $('title').textContent = isLogin ? 'Welcome back' : 'Create your account';
    $('lead').textContent = isLogin
      ? 'Log in to pick up where you left off.'
      : (state.role === 'student' ? 'Join your courses and start submitting.' : 'Set up your courses and start grading.');

    $('loginForm').classList.toggle('hidden', !isLogin);
    $('signupForm').classList.toggle('hidden', isLogin);
    $('studentField').classList.toggle('hidden', state.role !== 'student');
    $('instructorField').classList.toggle('hidden', state.role !== 'instructor');

    $('loginBtn').textContent = 'Log in as ' + state.role;
    $('signupBtn').textContent = 'Create ' + state.role + ' account';
  }

  // Switch between log in and sign up
  document.querySelectorAll('button[data-mode]').forEach(function (b) {
    b.addEventListener('click', function () {
      state.mode = b.getAttribute('data-mode');
      render();
    });
  });
  tabs.addEventListener('keydown', function (e) {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    state.mode = state.mode === 'login' ? 'signup' : 'login';
    render();
    $('tab-' + state.mode).focus();
  });

  // Student / instructor
  document.querySelectorAll('input[name="role"]').forEach(function (r) {
    r.addEventListener('change', function () {
      state.role = r.value;
      render();
    });
  });

  // Show / hide password
  document.querySelectorAll('.toggle').forEach(function (t) {
    t.addEventListener('click', function () {
      var input = $(t.getAttribute('data-target'));
      var show = input.type === 'password';
      input.type = show ? 'text' : 'password';
      t.textContent = show ? 'Hide' : 'Show';
      t.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
    });
  });

  render();
})

</script>
<template>

<main class="auth">
 
    <a class="brand" href="/" aria-label="SubmitHub home">
      <span class="brand-mark">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4M7 9l5-5 5 5M5 20h14"/></svg>
      </span>
      Turnly
    </a>
 
    <section class="card" id="card">
 
      <!-- Log in / Sign up switch -->
      <div class="tabs" id="tabs" data-mode="login" role="tablist" aria-label="Account">
        <button class="tab" role="tab" id="tab-login" aria-selected="true" data-mode="login" type="button">Log in</button>
        <button class="tab" role="tab" id="tab-signup" aria-selected="false" data-mode="signup" type="button">Sign up</button>
      </div>
 
      <header class="head">
        <h1 id="title">Welcome back</h1>
        <p id="lead">Log in to pick up where you left off.</p>
      </header>
 
      <!-- Student / Instructor selector -->
      <fieldset class="roles">
        <legend>I am a</legend>
        <div class="role-grid">
        <div class="role">
          <input type="radio" name="role" id="role-student" value="student" checked>
          <label for="role-student">
            <span class="role-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11.5V16c0 1.2 2.7 3 6 3s6-1.8 6-3v-4.5"/></svg></span>
            <span class="role-tx"><b>Student</b><small>Submit and track work</small></span>
          </label>
        </div>
        <div class="role">
          <input type="radio" name="role" id="role-instructor" value="instructor">
          <label for="role-instructor">
            <span class="role-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg></span>
            <span class="role-tx"><b>Instructor</b><small>Review and grade</small></span>
          </label>
        </div>
        </div>
      </fieldset>
 
      <div id="panel" role="tabpanel" aria-labelledby="tab-login">
 
        <!-- LOG IN -->
        <!-- @submit.prevent stops the page from reloading. Add your own login code here later. -->
        <form id="loginForm" novalidate @submit.prevent="handleLogin">
          <div class="field" data-field>
            <label for="l-email">Email</label>
            <div class="input">
              <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
              <input id="l-email" type="email" autocomplete="email" placeholder="Email">
            </div>
            <span class="err">Enter a valid email address.</span>
          </div>
 
          <div class="field" data-field>
            <div class="label-row"><label for="l-pw">Password</label><a href="#">Forgot password?</a></div>
            <div class="input has-toggle">
              <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>
              <input id="l-pw" type="password" autocomplete="current-password" placeholder="Enter Password">
              <button type="button" class="toggle" data-target="l-pw" aria-label="Show password">Show</button>
            </div>
            <span class="err">Enter your password.</span>
          </div>
 
          <label class="check"><input type="checkbox"><span>Keep me logged in on this device</span></label>
          <button class="btn" type="submit" id="loginBtn">Log in as student</button>
          <p class="switch">New to SubmitHub? <button type="button" data-mode="signup">Create an account</button></p>
        </form>
 
        <!-- SIGN UP -->
        <!-- @submit.prevent stops the page from reloading. Add your own sign up code here later. -->
        <form id="signupForm" class="hidden" novalidate @submit.prevent>
          <div class="field" data-field>
            <label for="s-name">Full name</label>
            <div class="input">
              <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></svg>
              <input id="s-name" type="text" autocomplete="name" placeholder="Full Name">
            </div>
            <span class="err">Enter your full name.</span>
          </div>
 
          <div class="field" data-field id="studentField">
            <label for="s-id">Student ID</label>
            <div class="input">
              <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M6 16c.6-1.4 1.8-2 3-2s2.4.6 3 2M15 10h3M15 14h3"/></svg>
              <input id="s-id" type="text" inputmode="numeric" placeholder="e.g. 261-01234">
            </div>
            <span class="err">Enter your student ID.</span>
          </div>
 
          <div class="field hidden" data-field id="instructorField">
            <label for="s-dept">Department</label>
            <div class="input">
              <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V7l8-4 8 4v14M9 21v-6h6v6"/></svg>
              <select id="s-dept">
                <option value="">Select your department</option>
                <option>Computer Science</option>
                <option>Information Technology</option>
                <option>Engineering</option>
                <option>Business</option>
                <option>Education</option>
                <option>Sciences</option>
                <option>Arts and Humanities</option>
              </select>
            </div>
            <span class="err">Select your department.</span>
          </div>
 
          <div class="field" data-field>
            <label for="s-email">School email</label>
            <div class="input">
              <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
              <input id="s-email" type="email" autocomplete="email" placeholder="Email">
            </div>
            <span class="err">Enter a valid email address.</span>
          </div>
 
          <div class="field" data-field>
            <label for="s-pw">Password</label>
            <div class="input has-toggle">
              <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>
              <input id="s-pw" type="password" autocomplete="new-password" placeholder="Create password">
              <button type="button" class="toggle" data-target="s-pw" aria-label="Show password">Show</button>
            </div>
            <span class="hint">At least 8 characters.</span>
            <span class="err">Use at least 8 characters.</span>
          </div>
 
          <label class="check" id="termsRow"><input type="checkbox" id="terms"><span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</span></label>
          <button class="btn" type="submit" id="signupBtn">Create student account</button>
          <p class="switch">Already have an account? <button type="button" data-mode="login">Log in</button></p>
        </form>
      </div>
    </section>
 
    <a class="back" href="/">← Back to home</a>
  </main>
</template>

<style src="~/assets/css/auth.css"></style>