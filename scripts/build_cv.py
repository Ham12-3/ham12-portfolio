"""Generate an ATS-friendly, single-column A4 CV for Abdulhamid Sonaike."""
import sys
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_RIGHT
from reportlab.lib.colors import HexColor, black
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether,
)

OUT = sys.argv[1]
INK = HexColor("#111827")
MUTED = HexColor("#374151")
LINK = HexColor("#1F3A8A")

FONT, BOLD, ITALIC = "Helvetica", "Helvetica-Bold", "Helvetica-Oblique"
BASE = 9.3

name = ParagraphStyle("name", fontName=BOLD, fontSize=20, leading=23, alignment=TA_CENTER, textColor=INK)
contact = ParagraphStyle("contact", fontName=FONT, fontSize=9, leading=12, alignment=TA_CENTER, textColor=MUTED)
section = ParagraphStyle("section", fontName=BOLD, fontSize=10.5, leading=13, textColor=INK, spaceBefore=5.5)
org = ParagraphStyle("org", fontName=BOLD, fontSize=BASE + 0.4, leading=12, textColor=INK)
right = ParagraphStyle("right", parent=org, fontName=BOLD, alignment=TA_RIGHT)
role = ParagraphStyle("role", fontName=ITALIC, fontSize=BASE, leading=11.6, textColor=MUTED)
role_r = ParagraphStyle("role_r", parent=role, alignment=TA_RIGHT)
body = ParagraphStyle("body", fontName=FONT, fontSize=BASE, leading=11.7, textColor=INK)
bullet = ParagraphStyle("bullet", parent=body, leftIndent=11, bulletIndent=2, spaceBefore=0.8)

W = A4[0] - 2 * 15 * mm - 12  # frame has 6pt padding each side


def heading(text):
    return [
        Paragraph(text.upper(), section),
        HRFlowable(width="100%", thickness=0.7, color=INK, spaceBefore=1.5, spaceAfter=3.5),
    ]


def two_col(left, right_text, lstyle, rstyle, split=0.68):
    t = Table([[Paragraph(left, lstyle), Paragraph(right_text, rstyle)]], colWidths=[W * split, W * (1 - split)])
    t.setStyle(TableStyle([
        ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    return t


def entry(organisation, location, title, dates, bullets, gap=5):
    block = [two_col(organisation, location, org, right), two_col(title, dates, role, role_r)]
    block += [Paragraph(b, bullet, bulletText="•") for b in bullets]
    block.append(Spacer(1, gap))
    return KeepTogether(block)


def link(url, label):
    return f'<link href="{url}" color="#1F3A8A">{label}</link>'


story = [
    Paragraph("ABDULHAMID SONAIKE", name),
    Spacer(1, 3),
    Paragraph(
        "London, UK &nbsp;|&nbsp; +44 7731 879464 &nbsp;|&nbsp; "
        + link("mailto:mobolaji2309@gmail.com", "mobolaji2309@gmail.com"),
        contact,
    ),
    Paragraph(
        link("https://www.linkedin.com/in/abdulhamid-sonaike/", "linkedin.com/in/abdulhamid-sonaike")
        + " &nbsp;|&nbsp; " + link("https://github.com/Ham12-3", "github.com/Ham12-3")
        + " &nbsp;|&nbsp; " + link("https://ham12-portfolio.vercel.app", "ham12-portfolio.vercel.app"),
        contact,
    ),
    Spacer(1, 2),
]

story += heading("Professional Summary")
story.append(Paragraph(
    "Software Engineer and AWS Certified Developer building AI-powered, cloud-native applications in Python, "
    "TypeScript and AWS. Cut API latency by 55% and held crash rates at 0.3% on an enterprise AI platform, and "
    "helped grow product waitlists past 30,000 users. Barclays Finance Technology programme alumnus seeking "
    "Technology Analyst and Software Engineering roles in investment banking and financial services.",
    body,
))

story += heading("Education")
for left, dates in [
    ("<b>Aston University</b> &mdash; BSc (Hons) Computer Science", "In progress"),
    ("<b>Lewisham College</b> &mdash; Extended National Diploma in IT: <b>Distinction</b> (A*A*A A-level equivalent)", "Jun 2025"),
    ("<b>Stanford University (Online)</b> &mdash; Machine Learning &amp; Artificial Intelligence: <b>Distinction</b>", "Completed"),
]:
    story.append(two_col(left, dates, body, role_r, split=0.86))
    story.append(Spacer(1, 1.5))
story.append(Paragraph("Relevant coursework: Software Development, Cloud Computing, Database Management, Machine Learning", bullet, bulletText="•"))

story += heading("Professional Experience")
story.append(entry(
    "Genie AI", "Toronto, Canada (Remote)",
    "Software Engineer", "Sep 2025 &ndash; Present",
    [
        "Reduced API response time by <b>55%</b> (420 ms to 190 ms) and cut production crash rate to <b>0.3%</b> "
        "by moving request handling to asynchronous Python and improving database indexes.",
        "Build scalable enterprise AI applications using Next.js, FastAPI and AWS services.",
    ],
))
story.append(entry(
    "Opsis AI", "United States (Remote)",
    "Software Engineer", "Jul 2025 &ndash; Sep 2025",
    [
        "Led development of an AI storyboarding assistant for 2D and 3D animators using machine learning models, "
        "saving users <b>4&ndash;5 hours per project</b> and thousands of pounds in production costs.",
        "Grew the product waitlist to <b>30,000+ users</b> through social media campaigns I designed and managed.",
    ],
))
story.append(entry(
    "LOTUS BPM AI Services", "United States (Remote)",
    "Full Stack Engineer", "Jan 2025 &ndash; Aug 2025",
    [
        "Built AI Docs Copilot, a document-intelligence platform that helped students learn <b>70% faster</b> and "
        "improve grades by up to <b>90%</b>.",
        "Integrated OpenAI, Claude and LangChain for AI features and <b>Stripe</b> for subscription payments, on a "
        "Next.js/FastAPI stack hosted on AWS (S3, EC2, RDS, Lambda, Elastic Beanstalk).",
    ],
))
story.append(entry(
    "Open Source Technology Community", "London, UK",
    "Software Engineer", "Jan 2024 &ndash; Dec 2024",
    [
        "Improved TheTechCommute website performance by <b>30%</b>, enhanced the Dottie AI application, and managed "
        "infrastructure across <b>8 AWS instances</b> (EC2, EFS, EBS, RDS).",
        "Published <b>20+ technical articles</b> on software engineering and cloud best practice, reaching nearly "
        "5,000 followers.",
    ],
))
story.append(entry(
    "Barclays &amp; Amazon Web Services", "London, UK",
    "Professional Development Programmes", "May 2024 &ndash; Jun 2024",
    [
        "Completed the <b>Barclays Finance Technology programme</b> (via Springboard), gaining hands-on exposure to "
        "financial technology.",
        "Completed AWS Developer training and earned the <b>AWS Certified Developer &ndash; Associate</b> certification.",
    ],
    gap=1,
))

story += heading("Projects")
story.append(entry(
    "PulsePM &mdash; " + link("https://www.pulsepm.ai", "pulsepm.ai"), "",
    "Founder &amp; Engineer &mdash; AI project management platform", "",
    [
        "Building a project workspace with an AI project manager that turns whiteboard photos, voice notes or briefs "
        "into reviewable plans, flags overdue and at-risk work daily, and drafts stakeholder status reports from "
        "live project data; integrates with Claude, Cursor and MCP clients.",
    ],
    gap=1,
))

story += heading("Skills, Certifications &amp; Achievements")
skills = [
    ("Languages", "Python, TypeScript, JavaScript, SQL, HTML/CSS"),
    ("Frameworks", "Next.js, React, FastAPI, Node.js, Express.js, Django, LangChain"),
    ("Cloud &amp; DevOps", "AWS (EC2, S3, RDS, Lambda, EFS, EBS, Elastic Beanstalk), Docker, Git, Linux, CI/CD"),
    ("Data &amp; AI", "PostgreSQL, database indexing &amp; query optimisation, OpenAI API, Claude API, LLM applications"),
    ("Practices", "REST APIs, asynchronous programming, Agile/Scrum, test-driven development, performance tuning"),
    ("Certifications", "AWS Certified Developer &ndash; Associate (2024); Barclays Finance Technology Programme (2024)"),
    ("Achievements &amp; Languages", "3rd Place, Fiberplane &amp; Cloudflare Hackathon; English (Fluent)"),
]
for label, value in skills:
    story.append(Paragraph(f"<b>{label}:</b> {value}", body))

doc = SimpleDocTemplate(
    OUT, pagesize=A4,
    leftMargin=15 * mm, rightMargin=15 * mm, topMargin=10 * mm, bottomMargin=10 * mm,
    title="Abdulhamid Sonaike - CV", author="Abdulhamid Sonaike",
    subject="Software Engineer - CV",
    keywords="Software Engineer, Python, TypeScript, AWS, FastAPI, Next.js, AI, Investment Banking Technology",
)
doc.build(story)
print("built", OUT)
