import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Shield, Code, Globe, Database, Workflow } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">DeployEase</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#apps" className="text-muted-foreground hover:text-foreground transition-colors">
              Applications
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-4 bg-secondary text-secondary-foreground">
            One-Click Hosting Platform
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 text-foreground">
            Deploy Your Applications in One Click
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Launch n8n, Supabase, WordPress, Node.js, .NET, and more with the simplest hosting experience ever created.
            No configuration, no hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Try for Free
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Choose DeployEase?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for developers who value simplicity without sacrificing power
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">Lightning Fast</CardTitle>
                <CardDescription>
                  Deploy applications in under 30 seconds with our optimized infrastructure
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Enterprise Security</CardTitle>
                <CardDescription>
                  Bank-grade security with automatic SSL, DDoS protection, and compliance
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-card-foreground">Developer Friendly</CardTitle>
                <CardDescription>
                  Git integration, CI/CD pipelines, and comprehensive APIs for seamless workflows
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="apps" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Supported Applications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From automation tools to full-stack frameworks, deploy anything with one click
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-background border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Workflow className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">n8n</CardTitle>
                    <CardDescription>Workflow Automation</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card className="bg-background border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Database className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Supabase</CardTitle>
                    <CardDescription>Backend as a Service</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card className="bg-background border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">WordPress</CardTitle>
                    <CardDescription>Content Management</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card className="bg-background border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Node.js</CardTitle>
                    <CardDescription>JavaScript Runtime</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card className="bg-background border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">.NET</CardTitle>
                    <CardDescription>Microsoft Framework</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card className="bg-background border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">v0</CardTitle>
                    <CardDescription>AI Code Generation</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">Ready to Deploy in One Click?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who trust DeployEase for their hosting needs
          </p>
          <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
            Start Your Free Trial
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-foreground text-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <Zap className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-bold">DeployEase</span>
              </div>
              <p className="text-background/70">The simplest way to deploy your applications</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-background/70">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-background/70">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-background/70">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
            <p>&copy; 2024 DeployEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
