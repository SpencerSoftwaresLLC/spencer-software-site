import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

const palette = {
  background: "#13212b",
  backgroundDeep: "#0d1720",
  panel: "#1b2c38",
  panelSoft: "#223746",
  border: "#314756",
  text: "#f7f3ea",
  sand: "#d6c2a8",
  blue: "#5aa2d6",
  orange: "#f08c4a",
  orangeSoft: "#ffb06b",
  green: "#6bbf72",
  greenSoft: "#8fd59a",
};

function Layout({ children }) {
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <div
      style={{
        background: `linear-gradient(180deg, ${palette.background}, ${palette.backgroundDeep})`,
        color: palette.text,
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          padding: "18px 32px",
          borderBottom: `1px solid ${palette.border}`,
          position: "sticky",
          top: 0,
          background: palette.backgroundDeep,
          zIndex: 20,
        }}
      >
        <div style={headerShellStyle}>
          <div style={headerLeftStyle}>
            <div>
              <div style={{ fontSize: 28, fontWeight: 800 }}>Spencer Softwares LLC</div>
              <div style={{ color: palette.sand, fontSize: 14 }}>
                Software that keeps real business moving
              </div>
            </div>

            <nav style={mainNavStyle}>
              <Link style={navLinkStyle} to="/">
                Home
              </Link>
              <Link style={navLinkStyle} to="/pricing">
                Pricing
              </Link>
              <Link style={navLinkStyle} to="/about">
                About
              </Link>
              <Link style={navLinkStyle} to="/contact">
                Contact
              </Link>
              <Link style={navButtonPrimary} to="/terraledger">
                Get Started
              </Link>
            </nav>
          </div>

          <div style={topRightNavWrapStyle}>
            <Link style={topRightLoginStyle} to="/login">
              Customer Login
            </Link>

            <div style={{ position: "relative" }}>
              <button
                type="button"
                onClick={() => setProductsOpen((v) => !v)}
                style={productsButtonStyle}
              >
                Products <span style={{ fontSize: 12 }}>▼</span>
              </button>

              {productsOpen && (
                <div style={dropdownMenuStyle}>
                  <Link
                    style={dropdownItemStyle}
                    to="/terraledger"
                    onClick={() => setProductsOpen(false)}
                  >
                    TerraLedger
                  </Link>
                  <div style={dropdownSectionLabelStyle}>More software coming soon</div>
                  <div style={dropdownMutedItemStyle}>Operations tools</div>
                  <div style={dropdownMutedItemStyle}>Business workflow software</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer
        style={{
          borderTop: `1px solid ${palette.border}`,
          marginTop: 60,
          padding: "28px 32px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 24,
          }}
        >
          <div>
            <div style={{ fontWeight: 700, fontSize: 20 }}>Spencer Softwares LLC</div>
            <p style={{ color: palette.sand, lineHeight: 1.7 }}>
              Business software built for quoting, invoicing, payroll,
              bookkeeping, and day-to-day operations.
            </p>
          </div>

          <div>
            <div style={footerTitle}>Products</div>
            <div>
              <Link style={footerLink} to="/terraledger">
                TerraLedger
              </Link>
            </div>
            <div>
              <Link style={footerLink} to="/login">
                Customer Login
              </Link>
            </div>
          </div>

          <div>
            <div style={footerTitle}>Company</div>
            <div>
              <Link style={footerLink} to="/about">
                About
              </Link>
            </div>
            <div>
              <Link style={footerLink} to="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <div style={footerTitle}>Legal & Business</div>
            <div style={{ color: palette.sand, lineHeight: 1.8 }}>
              SpencerSoftwaresLLC.com is the home for the company brand, product
              access, and software growth.
            </div>
            <div style={{ color: palette.sand, lineHeight: 1.8 }}>
              Built to support software products with clean branding, pricing,
              and customer access.
            </div>
            <div style={{ color: palette.sand, lineHeight: 1.8 }}>
              © Spencer Softwares LLC
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <Layout>
      <section style={heroWrapStyle}>
        <div>
          <div style={eyebrowStyle}>SpencerSoftwaresLLC.com</div>
          <h1 style={heroTitleStyle}>Software built to keep work moving.</h1>
          <p style={heroTextStyle}>
            Spencer Softwares is the home for TerraLedger and future software
            products built for companies that need cleaner operations, stronger
            billing workflows, and a better way to manage real business
            activity.
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              marginTop: 28,
            }}
          >
            <Link style={navButtonPrimary} to="/terraledger">
              Buy TerraLedger
            </Link>
            <Link style={navButtonSecondary} to="/terraledger">
              Explore Product
            </Link>
          </div>
        </div>

        <div style={heroCardStyle}>
          <div style={panelStyle}>
            <div style={{ color: palette.sand, fontSize: 14 }}>
              Featured Product
            </div>
            <div style={{ fontSize: 32, fontWeight: 800, marginTop: 10 }}>
              TerraLedger
            </div>
            <p
              style={{
                color: palette.text,
                lineHeight: 1.8,
                opacity: 0.92,
              }}
            >
              Quotes, invoices, jobs, payroll, bookkeeping, customers, and
              daily office control in one platform.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div style={panelStyle}>
              <div style={{ color: palette.sand, fontSize: 14 }}>
                Website Flow
              </div>
              <div style={{ fontWeight: 700, marginTop: 8 }}>
                Website-first access
              </div>
              <div
                style={{
                  color: palette.text,
                  opacity: 0.92,
                  marginTop: 8,
                  lineHeight: 1.6,
                }}
              >
                Customers subscribe through SpencerSoftwaresLLC.com, then
                TerraLedger access unlocks.
              </div>
            </div>
            <div style={panelStyle}>
              <div style={{ color: palette.sand, fontSize: 14 }}>
                Access Model
              </div>
              <div style={{ fontWeight: 700, marginTop: 8 }}>
                Subscription-gated
              </div>
              <div
                style={{
                  color: palette.text,
                  opacity: 0.92,
                  marginTop: 8,
                  lineHeight: 1.6,
                }}
              >
                No active plan means no active product access.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={sectionHeadingWrapCentered}>
          <div style={eyebrowStyle}>Why Spencer Softwares</div>
          <h2 style={sectionTitleStyle}>Built for real operators, not just demos.</h2>
          <p style={sectionTextStyle}>
            Spencer Softwares is being shaped to feel professional,
            trustworthy, and ready to grow into multiple software products over
            time.
          </p>
        </div>

        <div style={gridThreeStyle}>
          <FeatureCard
            title="Practical Business Tools"
            text="Software designed around actual workflows like billing, quotes, job tracking, bookkeeping, and payroll."
          />
          <FeatureCard
            title="Clear Product Structure"
            text="A company website up front, a product page for TerraLedger, and billing handled before app access begins."
          />
          <FeatureCard
            title="Ready To Scale"
            text="As Spencer Softwares grows, more products can live under the same company site and brand system."
          />
        </div>
      </section>
    </Layout>
  );
}

function TerraLedgerPage() {
  const features = [
    "Customer management",
    "Quote creation and conversion",
    "Invoice generation and payment tracking",
    "Job tracking and scheduling foundation",
    "Ledger and bookkeeping controls",
    "Employee and payroll support",
    "Subscription-based access control",
    "Windows desktop distribution path later",
  ];

  const plans = [
    {
      name: "Monthly",
      price: "$139",
      sub: "/month",
      note: "Flexible recurring access for teams that want a monthly billing cycle.",
      details: [
        "Full TerraLedger access",
        "Subscription-gated account access",
        "Billing handled on SpencerSoftwaresLLC.com",
      ],
      button: "Start Monthly",
      accent: palette.orange,
      badge: "Monthly Billing",
    },
    {
      name: "Yearly",
      price: "$1,168",
      sub: "/year",
      note: "Best value for full-time use with stronger long-term savings.",
      details: [
        "Full TerraLedger access",
        "Annual billing value",
        "Billing handled on SpencerSoftwaresLLC.com",
      ],
      button: "Start Yearly",
      accent: palette.green,
      badge: "Best Value",
    },
  ];

  return (
    <Layout>
      <section style={pageHeroStyle}>
        <div style={eyebrowStyle}>Product</div>
        <h1 style={pageTitleStyle}>TerraLedger</h1>
        <p style={pageTextStyle}>
          TerraLedger is the flagship software product under Spencer Softwares,
          designed for companies that need operational control without juggling
          disconnected systems.
        </p>
      </section>

      <section style={sectionStyle}>
        <div style={gridTwoStyle}>
          <div style={cardStyle}>
            <h2 style={cardHeadingStyle}>What TerraLedger Handles</h2>
            <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
              {features.map((item) => (
                <div key={item} style={listItemStyle}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div style={cardStyle}>
            <h2 style={cardHeadingStyle}>Who It Is For</h2>
            <p style={cardTextStyle}>
              TerraLedger is built for landscaping, hauling, yard material,
              field service, and growing local businesses that need reliable
              office software for daily operations.
            </p>
            <div style={{ marginTop: 24 }}>
              <a style={navButtonPrimary} href="#pricing">
                View TerraLedger Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" style={{ ...sectionStyle, paddingTop: 8 }}>
        <div style={sectionHeadingWrapCentered}>
          <div style={eyebrowStyle}>TerraLedger Pricing</div>
          <h2 style={sectionTitleStyle}>
            Choose the TerraLedger plan that fits your business.
          </h2>
          <p style={sectionTextStyleCentered}>
            TerraLedger pricing lives here so customers go straight from product
            details to the correct checkout flow.
          </p>
        </div>

        <div style={pricingGridStyle}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                ...pricingCardStyle,
                borderTop: `4px solid ${plan.accent}`,
              }}
            >
              <div style={pricingCardHeaderStyle}>
                <div>
                  <div style={pricingPlanLabelStyle}>{plan.name}</div>
                  <div style={pricingPriceRowStyle}>
                    <span style={pricingPriceStyle}>{plan.price}</span>
                    <span style={pricingSubStyle}>{plan.sub}</span>
                  </div>
                </div>
                <div
                  style={{
                    ...pricingBadgeStyle,
                    background: `${plan.accent}22`,
                    border: `1px solid ${plan.accent}55`,
                  }}
                >
                  {plan.badge}
                </div>
              </div>

              <p style={pricingNoteStyle}>{plan.note}</p>

              <div style={pricingFeatureGroupStyle}>
                {plan.details.map((item) => (
                  <div key={item} style={pricingFeatureRowStyle}>
                    <span style={pricingCheckStyle}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div style={pricingBottomWrapStyle}>
                {plan.name === "Monthly" ? (
                  <a
                    href="https://buy.stripe.com/bJe4gBepbbha5R05z8djO00"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      ...primaryButtonStyle,
                      display: "inline-block",
                      textAlign: "center",
                    }}
                  >
                    {plan.button}
                  </a>
                ) : (
                  <a
                    href="https://buy.stripe.com/dRmdRbftf5WQ3IS2mWdjO01"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      ...primaryButtonStyle,
                      display: "inline-block",
                      textAlign: "center",
                    }}
                  >
                    {plan.button}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

function PricingPage() {
  return (
    <Layout>
      <section style={pageHeroStyle}>
        <div style={eyebrowStyle}>Product Pricing</div>
        <h1 style={pageTitleStyle}>Choose a software product to view its pricing.</h1>
        <p style={pageTextStyle}>
          Each product under Spencer Softwares should lead to its own dedicated
          pricing experience so customers land on the correct checkout path.
        </p>
      </section>

      <section style={sectionStyle}>
        <div style={pricingIntroWrapStyle}>
          <div style={pricingIntroCardStyle}>
            <div style={pricingMiniLabelStyle}>Available now</div>
            <div style={pricingMiniTitleStyle}>TerraLedger</div>
            <p style={pricingMiniTextStyle}>
              View TerraLedger features, pricing options, and its dedicated
              purchase flow all in one place.
            </p>
            <div style={{ marginTop: 18 }}>
              <Link style={navButtonPrimary} to="/terraledger#pricing">
                View TerraLedger Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function AboutPage() {
  return (
    <Layout>
      <section style={pageHeroStyle}>
        <div style={eyebrowStyle}>About</div>
        <h1 style={pageTitleStyle}>Building software with a business-first mindset.</h1>
        <p style={pageTextStyle}>
          Spencer Softwares is being built as a company brand for software
          products focused on practical operations, clear billing, and tools
          that help businesses run smoother.
        </p>
      </section>

      <section style={sectionStyle}>
        <div style={gridTwoStyle}>
          <div style={cardStyle}>
            <h2 style={cardHeadingStyle}>The Goal</h2>
            <p style={cardTextStyle}>
              Create software that solves actual work problems instead of adding
              complexity. TerraLedger is the first step, and it sets the
              direction for the rest of the brand.
            </p>
          </div>
          <div style={cardStyle}>
            <h2 style={cardHeadingStyle}>The Structure</h2>
            <p style={cardTextStyle}>
              SpencerSoftwaresLLC.com handles branding, trust, pricing, and
              checkout. The app handles product usage and requires an active
              subscription to unlock access.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setIsSubmitting(true);
    setStatusMessage("");
    setStatusType("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong while sending your message.");
      }

      setStatusMessage("Your message has been sent successfully. We’ll be in touch soon.");
      setStatusType("success");

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setStatusMessage(error.message || "Unable to send your message right now.");
      setStatusType("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Layout>
      <section style={pageHeroStyle}>
        <div style={eyebrowStyle}>Contact</div>
        <h1 style={pageTitleStyle}>Tell us about your business needs.</h1>
        <p style={pageTextStyle}>
          Whether you need a better workflow, cleaner billing, or software built
          around the way your business actually operates, Spencer Softwares is
          focused on practical solutions that help companies run more
          efficiently.
        </p>
      </section>

      <section style={sectionStyle}>
        <div style={contactWrapStyle}>
          <div style={contactInfoCardStyle}>
            <div style={contactMiniLabelStyle}>Professional Consultation</div>
            <h2 style={contactTitleStyle}>Let’s start the conversation.</h2>
            <p style={contactBodyStyle}>
              Share a few details about your company and what you are looking to
              improve. This page is built for product inquiries, software
              questions, support requests, and future custom software
              discussions.
            </p>

            <div style={contactPointsWrapStyle}>
              <div style={contactPointStyle}>
                <span style={contactPointBulletStyle}>•</span>
                <span>Product questions and software inquiries</span>
              </div>
              <div style={contactPointStyle}>
                <span style={contactPointBulletStyle}>•</span>
                <span>Operational workflow improvement discussions</span>
              </div>
              <div style={contactPointStyle}>
                <span style={contactPointBulletStyle}>•</span>
                <span>Future custom software opportunities</span>
              </div>
            </div>
          </div>

          <div style={contactFormCardStyle}>
            <form onSubmit={handleSubmit} style={contactFormGridStyle}>
              <div style={fieldWrapStyle}>
                <label style={fieldLabelStyle}>Full Name</label>
                <input
                  style={inputStyle}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div style={fieldWrapStyle}>
                <label style={fieldLabelStyle}>Business Email</label>
                <input
                  style={inputStyle}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your business email"
                  required
                />
              </div>

              <div style={fieldWrapStyle}>
                <label style={fieldLabelStyle}>Company Name</label>
                <input
                  style={inputStyle}
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                />
              </div>

              <div style={fieldWrapStyle}>
                <label style={fieldLabelStyle}>Phone Number</label>
                <input
                  style={inputStyle}
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Optional phone number"
                />
              </div>

              <div style={{ ...fieldWrapStyle, gridColumn: "1 / -1" }}>
                <label style={fieldLabelStyle}>How can we help?</label>
                <textarea
                  style={textareaStyle}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your business, your current process, and what you would like to improve."
                  required
                />
              </div>

              {statusMessage ? (
                <div
                  style={{
                    gridColumn: "1 / -1",
                    borderRadius: 14,
                    padding: "14px 16px",
                    fontWeight: 700,
                    border:
                      statusType === "success"
                        ? `1px solid ${palette.green}66`
                        : `1px solid ${palette.orange}66`,
                    background:
                      statusType === "success"
                        ? "rgba(107,191,114,0.14)"
                        : "rgba(240,140,74,0.14)",
                    color: palette.text,
                  }}
                >
                  {statusMessage}
                </div>
              ) : null}

              <div style={{ gridColumn: "1 / -1" }}>
                <button
                  type="submit"
                  style={{
                    ...contactButtonStyle,
                    opacity: isSubmitting ? 0.75 : 1,
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Request Consultation"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function LoginPage() {
  return (
    <Layout>
      <section style={pageHeroStyle}>
        <div style={eyebrowStyle}>Customer Access</div>
        <h1 style={pageTitleStyle}>Log in to TerraLedger</h1>
        <p style={pageTextStyle}>
          Use this page to route customers into the TerraLedger app. Later,
          this button should link directly to your real product login URL.
        </p>
      </section>

      <section style={sectionStyle}>
        <div
          style={{
            ...cardStyle,
            maxWidth: 700,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2 style={cardHeadingStyle}>Customer Login Portal</h2>
          <p style={{ ...cardTextStyle, marginBottom: 24 }}>
            Customers with an active subscription should be able to log into
            TerraLedger from here.
          </p>
          <button style={primaryButtonStyle}>Go To TerraLedger Login</button>
        </div>
      </section>
    </Layout>
  );
}

function FeatureCard({ title, text }) {
  return (
    <div style={cardStyle}>
      <h3 style={{ marginTop: 0, fontSize: 22 }}>{title}</h3>
      <p style={cardTextStyle}>{text}</p>
    </div>
  );
}

const headerInnerStyle = {
  maxWidth: 1400,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "auto 1fr auto",
  gap: 28,
  alignItems: "center",
};

const headerShellStyle = {
  maxWidth: 1400,
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 24,
  flexWrap: "wrap",
};

const headerLeftStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 16,
  flex: 1,
  minWidth: 320,
};

const brandWrapStyle = {
  minWidth: 240,
};

const mainNavStyle = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: 18,
  flexWrap: "wrap",
};

const topRightNavWrapStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: 10,
};

const topRightLoginStyle = {
  background: "transparent",
  color: palette.text,
  textDecoration: "none",
  padding: "8px 14px",
  borderRadius: 12,
  fontWeight: 700,
  border: `1px solid ${palette.border}`,
  display: "inline-block",
};

const navLinkStyle = {
  color: palette.text,
  textDecoration: "none",
  fontWeight: 600,
};

const navButtonPrimary = {
  background: `linear-gradient(135deg, ${palette.orange}, ${palette.orangeSoft})`,
  color: palette.backgroundDeep,
  textDecoration: "none",
  padding: "10px 16px",
  borderRadius: 12,
  fontWeight: 800,
  display: "inline-block",
  boxShadow: "0 10px 24px rgba(240, 140, 74, 0.24)",
};

const navButtonSecondary = {
  background: "transparent",
  color: palette.text,
  textDecoration: "none",
  padding: "10px 16px",
  borderRadius: 12,
  fontWeight: 700,
  border: `1px solid ${palette.border}`,
  display: "inline-block",
};

const productsButtonStyle = {
  background: "transparent",
  color: palette.text,
  border: `1px solid ${palette.border}`,
  borderRadius: 12,
  padding: "10px 14px",
  fontWeight: 700,
  cursor: "pointer",
  minWidth: 138,
};

const dropdownMenuStyle = {
  position: "absolute",
  top: "calc(100% + 8px)",
  right: 0,
  minWidth: 240,
  background: palette.panel,
  border: `1px solid ${palette.border}`,
  borderRadius: 16,
  padding: 10,
  boxShadow: "0 18px 40px rgba(0,0,0,0.30)",
  zIndex: 30,
};

const dropdownItemStyle = {
  display: "block",
  color: palette.text,
  textDecoration: "none",
  padding: "10px 12px",
  borderRadius: 10,
  fontWeight: 700,
  background: `${palette.orange}18`,
  marginBottom: 8,
};

const dropdownSectionLabelStyle = {
  color: palette.sand,
  fontSize: 12,
  textTransform: "uppercase",
  letterSpacing: 1.3,
  fontWeight: 700,
  padding: "8px 12px 4px",
};

const dropdownMutedItemStyle = {
  color: palette.sand,
  padding: "8px 12px",
  borderRadius: 10,
  background: `${palette.blue}12`,
  marginTop: 6,
};

const heroWrapStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: 28,
  alignItems: "center",
  maxWidth: 1200,
  margin: "0 auto",
  padding: "72px 24px 32px",
};

const heroTitleStyle = {
  fontSize: "clamp(40px, 6vw, 68px)",
  lineHeight: 1.05,
  margin: "14px 0",
  fontWeight: 900,
};

const heroTextStyle = {
  color: palette.text,
  maxWidth: 680,
  lineHeight: 1.8,
  fontSize: 18,
  opacity: 0.92,
};

const heroCardStyle = {
  border: `1px solid ${palette.border}`,
  borderRadius: 28,
  padding: 18,
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
  display: "grid",
  gap: 14,
  boxShadow: "0 20px 44px rgba(0,0,0,0.28)",
};

const panelStyle = {
  border: `1px solid ${palette.border}`,
  borderRadius: 22,
  padding: 20,
  background: `linear-gradient(180deg, ${palette.panel}, ${palette.panelSoft})`,
};

const sectionStyle = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "40px 24px",
};

const sectionHeadingWrap = {
  maxWidth: 760,
  marginBottom: 26,
};

const sectionHeadingWrapCentered = {
  maxWidth: 760,
  margin: "0 auto 26px",
  textAlign: "center",
};

const sectionTitleStyle = {
  fontSize: 36,
  margin: "10px 0 12px",
};

const sectionTextStyle = {
  color: palette.text,
  lineHeight: 1.8,
  opacity: 0.9,
};

const sectionTextStyleCentered = {
  color: palette.text,
  lineHeight: 1.8,
  opacity: 0.9,
  textAlign: "center",
};

const eyebrowStyle = {
  display: "inline-block",
  background: `${palette.orange}18`,
  color: palette.orangeSoft,
  padding: "8px 14px",
  borderRadius: 999,
  fontWeight: 700,
  fontSize: 13,
  textTransform: "uppercase",
  letterSpacing: 1.5,
  border: `1px solid ${palette.orange}33`,
};

const gridThreeStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 20,
};

const gridTwoStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: 20,
};

const cardStyle = {
  border: `1px solid ${palette.border}`,
  borderRadius: 24,
  padding: 24,
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03))",
  boxShadow: "0 14px 30px rgba(0,0,0,0.22)",
};

const pricingCardStyle = {
  border: `1px solid ${palette.border}`,
  borderRadius: 28,
  padding: 30,
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
  boxShadow: "0 20px 40px rgba(0,0,0,0.22)",
  minHeight: 100,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const pricingIntroWrapStyle = {
  maxWidth: 860,
  margin: "0 auto 28px",
};

const pricingIntroCardStyle = {
  border: `1px solid ${palette.border}`,
  borderRadius: 24,
  padding: "22px 24px",
  background:
    "linear-gradient(180deg, rgba(90,162,214,0.08), rgba(240,140,74,0.05))",
  boxShadow: "0 16px 34px rgba(0,0,0,0.18)",
};

const pricingMiniLabelStyle = {
  color: palette.sand,
  textTransform: "uppercase",
  letterSpacing: 1.4,
  fontSize: 12,
  fontWeight: 700,
};

const pricingMiniTitleStyle = {
  marginTop: 8,
  fontSize: 28,
  fontWeight: 800,
};

const pricingMiniTextStyle = {
  color: palette.text,
  opacity: 0.92,
  lineHeight: 1.8,
  margin: "10px 0 0",
};

const pricingGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: 24,
  alignItems: "stretch",
};

const pricingCardHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 16,
  flexWrap: "wrap",
};

const pricingPlanLabelStyle = {
  color: palette.sand,
  textTransform: "uppercase",
  letterSpacing: 1.5,
  fontSize: 13,
  fontWeight: 700,
};

const pricingPriceRowStyle = {
  display: "flex",
  alignItems: "flex-end",
  gap: 10,
  marginTop: 14,
  flexWrap: "wrap",
};

const pricingPriceStyle = {
  fontSize: 54,
  lineHeight: 1,
  fontWeight: 900,
};

const pricingSubStyle = {
  color: palette.sand,
  paddingBottom: 8,
  fontSize: 16,
};

const pricingBadgeStyle = {
  padding: "8px 12px",
  borderRadius: 999,
  fontWeight: 700,
  fontSize: 13,
  whiteSpace: "nowrap",
};

const pricingNoteStyle = {
  color: palette.text,
  opacity: 0.92,
  lineHeight: 1.8,
  margin: "22px 0 18px",
};

const pricingFeatureGroupStyle = {
  display: "grid",
  gap: 12,
  marginTop: 6,
};

const pricingFeatureRowStyle = {
  display: "grid",
  gridTemplateColumns: "22px 1fr",
  gap: 10,
  alignItems: "start",
  border: `1px solid ${palette.border}`,
  borderRadius: 14,
  padding: "12px 14px",
  background: `linear-gradient(180deg, ${palette.panel}, ${palette.panelSoft})`,
  color: palette.text,
};

const pricingCheckStyle = {
  color: palette.greenSoft,
  fontWeight: 900,
  lineHeight: 1.2,
};

const pricingBottomWrapStyle = {
  marginTop: 24,
  paddingTop: 4,
};

const cardHeadingStyle = {
  marginTop: 0,
  marginBottom: 8,
  fontSize: 28,
};

const cardTextStyle = {
  color: palette.text,
  lineHeight: 1.8,
  opacity: 0.92,
};

const pageHeroStyle = {
  maxWidth: 980,
  margin: "0 auto",
  padding: "74px 24px 24px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const pageTitleStyle = {
  fontSize: "clamp(38px, 6vw, 58px)",
  lineHeight: 1.08,
  margin: "14px 0",
  fontWeight: 900,
};

const pageTextStyle = {
  color: palette.text,
  lineHeight: 1.85,
  fontSize: 18,
  maxWidth: 800,
  opacity: 0.92,
  margin: "0 auto",
  textAlign: "center",
};

const listItemStyle = {
  border: `1px solid ${palette.border}`,
  borderRadius: 14,
  padding: "12px 14px",
  background: `linear-gradient(180deg, ${palette.panel}, ${palette.panelSoft})`,
  color: palette.text,
};

const inputStyle = {
  width: "100%",
  height: 52,
  background: "#182833",
  border: `1px solid ${palette.border}`,
  borderRadius: 14,
  padding: "0 16px",
  color: palette.text,
  fontSize: 16,
  boxSizing: "border-box",
  outline: "none",
};

const textareaStyle = {
  width: "100%",
  minHeight: 160,
  background: "#182833",
  border: `1px solid ${palette.border}`,
  borderRadius: 14,
  padding: "14px 16px",
  color: palette.text,
  fontSize: 16,
  boxSizing: "border-box",
  resize: "vertical",
  outline: "none",
};

const primaryButtonStyle = {
  marginTop: 22,
  background: `linear-gradient(135deg, ${palette.green}, ${palette.orangeSoft})`,
  color: palette.backgroundDeep,
  border: "none",
  borderRadius: 14,
  padding: "14px 18px",
  fontSize: 16,
  fontWeight: 800,
  cursor: "pointer",
  boxShadow: "0 12px 28px rgba(107,191,114,0.22)",
};

const contactWrapStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
  gap: 24,
  alignItems: "stretch",
};

const contactInfoCardStyle = {
  border: `1px solid ${palette.border}`,
  borderRadius: 24,
  padding: 28,
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03))",
  boxShadow: "0 14px 30px rgba(0,0,0,0.22)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const contactFormCardStyle = {
  border: `1px solid ${palette.border}`,
  borderRadius: 24,
  padding: 28,
  background: `linear-gradient(180deg, ${palette.panel}, ${palette.panelSoft})`,
  boxShadow: "0 14px 30px rgba(0,0,0,0.22)",
};

const contactMiniLabelStyle = {
  color: palette.orangeSoft,
  textTransform: "uppercase",
  letterSpacing: 1.5,
  fontSize: 12,
  fontWeight: 700,
};

const contactTitleStyle = {
  margin: "12px 0 12px",
  fontSize: 34,
  lineHeight: 1.15,
};

const contactBodyStyle = {
  color: palette.text,
  opacity: 0.92,
  lineHeight: 1.85,
  marginBottom: 22,
};

const contactPointsWrapStyle = {
  display: "grid",
  gap: 12,
  marginTop: 4,
};

const contactPointStyle = {
  display: "grid",
  gridTemplateColumns: "16px 1fr",
  gap: 10,
  alignItems: "start",
  color: palette.sand,
  lineHeight: 1.7,
};

const contactPointBulletStyle = {
  color: palette.orangeSoft,
  fontWeight: 900,
};

const contactFormGridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 18,
};

const fieldWrapStyle = {
  display: "grid",
  gap: 8,
};

const fieldLabelStyle = {
  fontSize: 13,
  fontWeight: 700,
  color: palette.sand,
  letterSpacing: 0.4,
};

const contactButtonStyle = {
  width: "100%",
  marginTop: 4,
  background: `linear-gradient(135deg, ${palette.orange}, ${palette.orangeSoft})`,
  color: palette.backgroundDeep,
  border: "none",
  borderRadius: 14,
  padding: "16px 18px",
  fontSize: 16,
  fontWeight: 800,
  cursor: "pointer",
  boxShadow: "0 12px 28px rgba(240,140,74,0.24)",
};

const footerTitle = {
  fontWeight: 700,
  marginBottom: 10,
};

const footerLink = {
  color: palette.sand,
  textDecoration: "none",
  lineHeight: 2,
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terraledger" element={<TerraLedgerPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}