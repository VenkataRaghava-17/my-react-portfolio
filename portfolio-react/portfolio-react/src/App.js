import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  Github,
  Linkedin,
  Mail,
  User,
  BookMarked,
  ArrowUp,
  Menu,
  X,
  Award,
  Globe
} from 'lucide-react';

// This is the central object where you can update all your personal details.
const portfolioData = {
  name: "Venkata Raghava", // Your full name
  title: "Financial Analyst | US Retirement Plan Administrator", // Your professional title
  bio: "A detail-oriented financial analyst and proactive US retirement plan administrator. I am passionate about leveraging data-driven insights and committed to ensuring client success. My expertise spans across financial analysis, regulatory compliance, and a deep understanding of retirement planning.",
  social: {
    github: "https://github.com/VenkataRaghava-17", // Your GitHub profile URL (optional)
    linkedin: "https://linkedin.com/in/gantivenkataraghava", // Your LinkedIn profile URL
    email: "gantivenkataraghava@gmail.com", // Corrected and valid email format, please update with your actual email
    website: "https://your-website.com" // Your personal website URL (optional)
  },
  experience: [
    {
      company: "FinBuzz Financial Services", // Company name
      role: "Financial Analyst", // Your role at the company
      duration: "Jun 2025 - Present", // Your employment duration
      details: [
        {
          heading: "Compliance and Administration",
          items: [
            "Administer annual nondiscrimination and compliance testing for Defined Contribution plans (ADP/ACP, 402(g), 415(c), etc.) in line with IRS and DOL guidelines.",
            "Coordinate all stages of the plan cycle, from census preparation and administration calculations to query resolution and final submission of compliance packages."
          ]
        },
        {
          heading: "Regulatory Reporting",
          items: [
            "Prepare and validate Form 5500, 8955-SSA, and related schedules for timely and accurate regulatory filings.",
            "Analyze and reconcile participant-level data, including compensation, eligibility, and deferral records, to ensure data integrity and compliance."
          ]
        }
      ]
    },
    {
      company: "FinBuzz Financial Services", // Company name
      role: "Management Trainee", // Your role at the company
      duration: "March 2025 - Jun 2025", // Your employment duration
      details: [
        {
          heading: "401(k) Plan Support",
          items: [
            "Supported end-to-end administration of US 401(k) retirement plans, including census preparation, eligibility tracking, and compliance testing.",
            "Assisted with ADP/ACP, 402(g), 415(c), Coverage, and Top-Heavy testing as per IRS and DOL guidelines."
          ]
        },
        {
          heading: "Team Collaboration",
          items: [
            "Coordinated with plan preparers, reviewers, and US-based teams to resolve queries and meet project deadlines.",
            "Contributed to internal reporting and process improvement efforts, enhancing overall team efficiency."
          ]
        }
      ]
    },
    {
      company: "Shree Jaya Laboratories Pvt. Ltd.", // Company name
      role: "Finance & Accounts Intern", // A sample role based on the company name
      duration: "Aug 2024 - Feb 2025", // A sample duration
      details: [
        {
          heading: "Taxation and Financial Reporting",
          items: [
            "Monitored GST credit utilization, reconciled discrepancies, and recommended corrective actions to optimize tax liability.",
            "Developed quarterly financial reports, identified material misstatements, and mitigated financial risks."
          ]
        },
        {
          heading: "Audit and Process Improvement",
          items: [
            "Led the application and coordination with government authorities, successfully securing a GST refund.",
            "Conducted monthly stock audits, implemented advanced audit techniques, and enhanced efficiency and accuracy by 15%."
          ]
        }
      ]
    },
  ],
  skills: {
    financial: ["Financial Accounting", "Data Analysis", "Corporate & Business Law", "Management Information Systyem", "Strategic Planning"],
    compliance: ["IRS Regulations", "DOL Guidelines", "Retirement Plan Administration", "Indirect Taxation", "GAAP, IFRS, IAS", "Income Tax"],
    software: ["Microsoft Excel", "FT William", "Datair", "Focus Softnet", "ERP", "Promt Engineering"]
  },
  awards: [
    {
      name: "Certificate of Appriciation",
      organization: "FinBuzz Financial Services",
      year: "June 2024"
    },
  ],
  certifications: [
    {
      name: "JP Morgan Chase & Co. - Internal Audit Virtual Experience Program",
      issuer: "Forage",
      year: "2024"
    },
    {
      name: "Ernst & Young - Financial Accounting Advisory Services (FAAS)",
      issuer: "Forage",
      year: "2024"
    },
    {
      name: "Cambridge University Press - Soft skills & Employability skills Training",
      issuer: "Institute of Cost Accountants of India",
      year: "2023"
    },
    {
      name: "SAP FI-CO Power User Course",
      issuer: "Institute of Cost Accountants of India",
      year: "2023"
    },
  ]
};

// Section component for consistent styling