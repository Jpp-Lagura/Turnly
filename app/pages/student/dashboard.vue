<script setup>
definePageMeta({
  layout: 'student-sidebar'
})
</script>

<template>
  <div class="page-wrap">
    <!-- TOP BAR -->
    <header class="topbar">
      <div class="search-box">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input type="text" placeholder="Search courses, assignments..." />
        <kbd>⌘ K</kbd>
      </div>

      <div class="topbar-right">
        <button class="icon-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span class="notif-dot"></span>
        </button>

        <div class="user-chip">
          <div class="avatar">JP</div>
          <div class="user-info">
            <div class="user-name">John Paul Lagura</div>
            <div class="user-role">Student</div>
          </div>
        </div>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <main class="main">
      <!-- WELCOME -->
      <div class="welcome-row">
        <div>
          <h1>Welcome back, John Paul!</h1>
          <p>Let's make progress. You have 3 assignments to submit.</p>
        </div>
        <div class="today-date">Wednesday, October 14, 2026</div>
      </div>

      <!-- STATS -->
      <section class="stats-grid">
        <div class="stat-card">
          <div class="stat-top">
            <span class="stat-label">Total Assignments</span>
            <span class="stat-icon icon-purple-soft">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="2" width="6" height="4" rx="1" />
                <path d="M9 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3" />
              </svg>
            </span>
          </div>
          <div class="stat-number">6</div>
          <div class="stat-sub">Across 4 courses</div>
        </div>

        <div class="stat-card">
          <div class="stat-top">
            <span class="stat-label">Pending</span>
            <span class="stat-icon icon-purple-soft">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </span>
          </div>
          <div class="stat-number">3</div>
          <div class="stat-sub">1 overdue · 1 due soon</div>
        </div>

        <div class="stat-card">
          <div class="stat-top">
            <span class="stat-label">Submitted</span>
            <span class="stat-icon icon-purple-soft">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </span>
          </div>
          <div class="stat-number">1</div>
          <div class="stat-sub">Awaiting feedback</div>
        </div>

        <div class="stat-card">
          <div class="stat-top">
            <span class="stat-label">Graded</span>
            <span class="stat-icon icon-green-soft">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
              </svg>
            </span>
          </div>
          <div class="stat-number">2</div>
          <div class="stat-sub">90% average grade</div>
        </div>
      </section>

      <!-- CONTENT GRID -->
      <div class="content-grid">
        <!-- LEFT COLUMN -->
        <div class="col-left">
          <!-- UPCOMING DEADLINES -->
          <section class="card">
            <div class="card-header">
              <h2>Upcoming Deadlines</h2>
              <span class="muted-small">3 to do</span>
            </div>

            <div class="deadline-list">
              <div class="deadline-item warn">
                <div class="date-badge warn">
                  <span class="date-month">OCT</span>
                  <span class="date-day">13</span>
                </div>
                <div class="deadline-info">
                  <div class="deadline-title">Wireframe exploration</div>
                  <div class="deadline-meta">DESIGN 210 · Interaction Design</div>
                  <div class="deadline-meta light">Oct 13, 2026, 11:59 PM</div>
                </div>
                <div class="deadline-status">
                  <span class="badge badge-warn">● Due Soon</span>
                  <div class="status-sub">1 day left</div>
                </div>
              </div>

              <div class="deadline-item danger">
                <div class="date-badge danger">
                  <span class="date-month">OCT</span>
                  <span class="date-day">11</span>
                </div>
                <div class="deadline-info">
                  <div class="deadline-title">Problem set 3</div>
                  <div class="deadline-meta">STAT 202 · Applied Statistics</div>
                  <div class="deadline-meta light">Oct 11, 2026, 11:59 PM</div>
                </div>
                <div class="deadline-status">
                  <span class="badge badge-danger">● Overdue</span>
                  <div class="status-sub danger-text">1 day overdue</div>
                </div>
              </div>

              <div class="deadline-item neutral">
                <div class="date-badge neutral">
                  <span class="date-month">OCT</span>
                  <span class="date-day">16</span>
                </div>
                <div class="deadline-info">
                  <div class="deadline-title">Group project proposal</div>
                  <div class="deadline-meta">RES 110 · Research Methods</div>
                  <div class="deadline-meta light">Oct 16, 2026, 11:59 PM</div>
                </div>
                <div class="deadline-status">
                  <span class="badge badge-neutral">● Pending</span>
                  <div class="status-sub">4 days left</div>
                </div>
              </div>
            </div>
          </section>

          <!-- YOUR ASSIGNMENTS -->
          <section class="card">
            <div class="card-header">
              <h2>Your Assignments</h2>
              <button class="more-btn">⋯</button>
            </div>

            <div class="tabs">
              <button class="tab active">All · 6</button>
              <button class="tab">Pending · 3</button>
              <button class="tab">Completed · 3</button>
            </div>

            <div class="table-responsive">
              <table class="assignments-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Course</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Grade</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="title-cell">Wireframe exploration</td>
                    <td>DESIGN 210</td>
                    <td>Oct 13, 2026</td>
                    <td><span class="badge badge-warn">● Due Soon</span></td>
                    <td>-</td>
                    <td><button class="btn-submit">Submit</button></td>
                  </tr>
                  <tr>
                    <td class="title-cell">Problem set 3</td>
                    <td>STAT 202</td>
                    <td>Oct 11, 2026</td>
                    <td><span class="badge badge-danger">● Overdue</span></td>
                    <td>-</td>
                    <td><button class="btn-submit">Submit</button></td>
                  </tr>
                  <tr>
                    <td class="title-cell">Group project proposal</td>
                    <td>RES 110</td>
                    <td>Oct 16, 2026</td>
                    <td><span class="badge badge-neutral">● Pending</span></td>
                    <td>-</td>
                    <td><button class="btn-submit">Submit</button></td>
                  </tr>
                  <tr>
                    <td class="title-cell">Database design report</td>
                    <td>CS 201</td>
                    <td>Oct 13, 2026</td>
                    <td><span class="badge badge-success">● Submitted</span></td>
                    <td>-</td>
                    <td><button class="btn-view">View</button></td>
                  </tr>
                  <tr>
                    <td class="title-cell">SQL practice</td>
                    <td>CS 201</td>
                    <td>Oct 8, 2026</td>
                    <td><span class="badge badge-graded">● Graded</span></td>
                    <td class="grade-cell">92/100</td>
                    <td><button class="btn-view">View</button></td>
                  </tr>
                  <tr>
                    <td class="title-cell">Literature review</td>
                    <td>ENG 205</td>
                    <td>Oct 7, 2026</td>
                    <td><span class="badge badge-graded">● Graded</span></td>
                    <td class="grade-cell">88/100</td>
                    <td><button class="btn-view">View</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="col-right">
          <!-- CALENDAR -->
          <section class="card calendar-wrap">
          <iframe src="https://calendar.google.com/calendar/embed?height=300&wkst=1&ctz=Asia%2FManila&showPrint=0&src=am9obnBhdWwubGFndXJhQGNhcnN1LmVkdS5waA&src=Y19jbGFzc3Jvb20zNmM5NTA2Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4ucGhpbGlwcGluZXMjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19jbGFzc3Jvb200MTE2NjAxZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb21kZWM3ZWFlNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb21iNDYzYzg2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb21mZTcwYTBiZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb205ZDNhOGU0YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb21hYjA5Y2Y0NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb201MDlhZjg0ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb21lNWY3YmE2NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb20yZmJhNTI5NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%23007b83&color=%230b8043&color=%231967d2&color=%23c26401&color=%231967d2&color=%23202124&color=%231967d2&color=%231967d2&color=%23202124&color=%23202124&color=%23202124" 
          style="border:solid 1px #777" width="300" height="300" frameborder="0" scrolling="no"></iframe>
          </section>

          <!-- RECENT FEEDBACK -->
          <section class="card">
            <h2>Recent Feedback</h2>

            <div class="feedback-item">
              <div class="feedback-top">
                <span class="feedback-title">SQL practice</span>
                <span class="feedback-score">92 / 100</span>
              </div>
              <p class="feedback-text">
                Strong query structure. Review the join in question 4 for a more efficient solution.
              </p>
              <div class="feedback-author">
                <div class="mini-avatar">EB</div>
                <span>Dr. Elena Brooks · Oct 9</span>
              </div>
            </div>

            <div class="feedback-item">
              <div class="feedback-top">
                <span class="feedback-title">Literature review</span>
                <span class="feedback-score">88 / 100</span>
              </div>
              <p class="feedback-text">
                Thoughtful synthesis. Add more recent sources to strengthen your argument.
              </p>
              <div class="feedback-author">
                <div class="mini-avatar">DP</div>
                <span>Prof. Daniel Park · Oct 7</span>
              </div>
            </div>
          </section>

          <!-- PROGRESS -->
          <section class="card progress-card">
            <h2>Your Progress</h2>
            <div class="progress-circle-wrap">
              <div class="progress-circle">
                <span class="progress-value">50%</span>
                <span class="progress-caption">completed</span>
              </div>
            </div>
            <div class="progress-legend">
              <span><i class="dot dot-deadline"></i> Submitted or graded</span>
              <span class="progress-count">3</span>
            </div>
            <div class="progress-legend">
              <span><i class="dot dot-muted"></i> Remaining</span>
              <span class="progress-count">3</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<style src="~/assets/css/student-dashboard.css"></style>
