import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy - The Salty Vibe"
        description="Privacy Policy for The Salty Vibe blog, including information about data collection, use, and your rights under CCPA and other privacy laws."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        
        <main className="flex-1">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="prose prose-lg max-w-none">
              <h1 className="font-serif text-4xl font-bold mb-8">Privacy Policy</h1>
              
              <p className="text-muted-foreground mb-8">
                <strong>Effective Date:</strong> January 20, 2025
              </p>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold mb-4">Introduction</h2>
                <p className="mb-4">
                  The Salty Vibe ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website thesaltyvibe.com.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold mb-4">Information We Collect</h2>
                <h3 className="font-semibold text-lg mb-3">Personal Information</h3>
                <p className="mb-4">
                  We may collect personal information that you voluntarily provide, including:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Email addresses when you subscribe to our newsletter</li>
                  <li>Contact information when you reach out via our contact form</li>
                  <li>Comments and feedback you provide</li>
                </ul>

                <h3 className="font-semibold text-lg mb-3">Automatically Collected Information</h3>
                <p className="mb-4">
                  When you visit our website, we may automatically collect:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>IP address and location information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold mb-4">How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Provide and maintain our website and services</li>
                  <li>Send newsletters and marketing communications (with your consent)</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Analyze website usage to improve our content and user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold mb-4">Information Sharing</h2>
                <p className="mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>To service providers who assist us in operating our website</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold mb-4">Cookies and Tracking</h2>
                <p className="mb-4">
                  Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold mb-4">Your California Privacy Rights (CCPA)</h2>
                <p className="mb-4">
                  If you are a California resident, you have the right to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Know:</strong> Request information about the personal information we collect, use, and disclose</li>
                  <li><strong>Delete:</strong> Request deletion of your personal information</li>
                  <li><strong>Opt-out:</strong> Opt-out of the sale of personal information (we do not sell personal information)</li>
                  <li><strong>Non-discrimination:</strong> Receive equal service and pricing regardless of exercising your privacy rights</li>
                </ul>
                <p className="mb-4">
                  To exercise these rights, please contact us at hello@thesaltyvibe.com.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold mb-4">Data Security</h2>
                <p className="mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold mb-4">Children's Privacy</h2>
                <p className="mb-4">
                  Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold mb-4">Changes to This Policy</h2>
                <p className="mb-4">
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="mb-4">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p><strong>Email:</strong> hello@thesaltyvibe.com</p>
                  <p><strong>Website:</strong> thesaltyvibe.com</p>
                </div>
              </section>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}