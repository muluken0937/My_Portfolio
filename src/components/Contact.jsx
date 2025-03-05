function Contact() {
    return (
      <div className="max-w-3xl mx-auto mt-10 space-y-4">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p>If you'd like to get in touch, feel free to reach out via email or LinkedIn.</p>
        <ul className="space-y-2">
          <li>Email: <a href="mailto:mulukenjenber@gmail.com" className="text-blue-600">mulukenjenber@gmail.com</a></li>
          <li>Phone: <a href="tel:+251937908221" className="text-blue-600">+251-937-908-221</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/mulukenjenber" target="_blank" rel="noreferrer" className="text-blue-600">linkedin.com/in/mulukenjenber</a></li>
        </ul>
      </div>
    );
  }
  
  export default Contact;
  