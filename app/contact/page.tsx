export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f7efe6] py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-display font-bold text-espresso mb-6">Contact</h1>
        <p className="text-moss leading-8 mb-8">
          Need help? Send us a message and we’ll get back to you soon.
        </p>
        <div className="grid gap-6 rounded-[32px] bg-white border border-[#dfcab0] p-10 shadow-vintage">
          <div>
            <h2 className="text-xl font-semibold text-espresso mb-2">Email</h2>
            <p className="text-moss">support@vaultkicks.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-espresso mb-2">Location</h2>
            <p className="text-moss">Vintage Lane, Creative District, Online</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-espresso mb-2">Hours</h2>
            <p className="text-moss">Monday - Friday, 9am - 6pm</p>
          </div>
        </div>
      </div>
    </div>
  )
}
