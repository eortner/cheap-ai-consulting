// ROI Calculator
function calculateSavings() {
  const users = parseInt(document.getElementById('users')?.value || 10);
  const tasks = parseInt(document.getElementById('tasks')?.value || 50);
  const rate = parseInt(document.getElementById('rate')?.value || 75);
  
  const minutesSaved = tasks * 15; // 15 min per task
  const hoursSaved = minutesSaved / 60;
  const weeklySavings = hoursSaved * rate;
  const annualSavings = weeklySavings * 52;
  
  document.getElementById('savings').textContent = `$${weeklySavings.toLocaleString()}`;
  document.getElementById('savingsDetails').textContent = `$${rate}/hr for ${users} users`;
  
  return { weeklySavings, annualSavings, users, tasks, rate };
}

// Auto-calculate on input change
document.addEventListener('DOMContentLoaded', function() {
  const inputs = ['users', 'tasks', 'rate'];
  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', calculateSavings);
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

// Generate report (placeholder for lead capture)
function generateReport() {
  const data = calculateSavings();
  alert(`Report generation coming soon!\n\nYour potential savings: $${data.annualSavings.toLocaleString()}/year\n\nContact us to get your personalized ROI analysis.`);
  // In production: Open modal with email capture form
}
