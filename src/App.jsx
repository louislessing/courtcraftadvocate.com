import { useState } from 'react'
    
    const SERVICES = [
      { title: 'AI Legal Assistant', badge: 'Subscribers', icon: '🤖', desc: "Get instant guidance on UK family law, court procedures, and McKenzie Friend rights." },
      { title: 'Court Report Generator', badge: 'Subscribers', icon: '📄', desc: "Generate professional, court-ready PDF reports with timelines, evidence appendices, and statements of truth." },
      { title: 'Child Contact Tracker', badge: 'Subscribers', icon: '👶', desc: "Log every pickup, dropoff, and interaction. Track custody schedules and document everything for court." },
      { title: 'Finance Tracker', badge: 'Subscribers', icon: '💰', desc: "Track child maintenance payments, additional expenses, and upload receipts. Generate financial summaries." },
      { title: 'Communication Logger', badge: 'Subscribers', icon: '💬', desc: "Record all communications with your ex-partner. Tag as positive, neutral, or concerning for court evidence." },
      { title: 'Custody Calendar', badge: 'Subscribers', icon: '📅', desc: "Visual calendar view of custody schedules, upcoming court dates, and important deadlines." },
      { title: 'Secure Document Storage', badge: 'Subscribers', icon: '🔒', desc: "Upload and organise court orders, correspondence, evidence, and financial documents securely." },
      { title: 'McKenzie Friend Support', badge: 'Free', icon: '⚖️', desc: "Professional guidance on your rights as a litigant in person with McKenzie Friend assistance in court." },
      { title: 'Legal Resources Library', badge: 'Free', icon: '📚', desc: "Access articles, guides, FAQs, and video tutorials on UK family law and court procedures." },
      { title: 'Case Timeline Builder', badge: 'Subscribers', icon: '🕐', desc: "Build a chronological timeline of events for your case with evidence linking and export capabilities." },
      { title: 'GDPR Compliant', badge: 'All Users', icon: '🛡️', desc: "Your data is encrypted at rest and in transit. Request deletion at any time. Full GDPR compliance." },
      { title: 'Analytics Dashboard', badge: 'Subscribers', icon: '📊', desc: "Visual summaries of contact patterns, financial tracking, and communication trends for your case." },
