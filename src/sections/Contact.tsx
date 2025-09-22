import React from 'react';

const Contact: React.FC = () => {
  const contactInfo = {
    location: "Boston, MA",
    phone: "+1-781-228-3315",
    email: "keerthanaravislm@gmail.com",
    github: "https://github.com/keerthana-ravi-thoddoon",
    linkedin: "https://www.linkedin.com/in/keerthana-thoddoon-ravi"
  };

  return (
    <section id="contact" className="px-6 py-8">
      <h2 className="text-2xl font-bold mb-6 text-softWhite text-center">Contact</h2>
      <div className="mx-auto">
        <div className="text-center mb-8">
          <p className="text-lg text-softWhite/80">
            Let's connect and discuss opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg bg-primary/30 backdrop-blur-sm border border-secondary/20">
            <h3 className="text-xl font-bold text-secondary mb-4">Contact Information</h3>
            <div className="space-y-4">
              <p className="flex items-center text-textSecondary">
                <span className="w-20 text-textPrimary">Location:</span>
                {contactInfo.location}
              </p>
              <p className="flex items-center text-textSecondary">
                <span className="w-20 text-textPrimary">Phone:</span>
                <a href={`tel:${contactInfo.phone}`} className="hover:text-secondary transition-colors">
                  {contactInfo.phone}
                </a>
              </p>
              <p className="flex items-center text-textSecondary">
                <span className="w-20 text-textPrimary">Email:</span>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-secondary transition-colors">
                  {contactInfo.email}
                </a>
              </p>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-primary/30 backdrop-blur-sm border border-secondary/20">
            <h3 className="text-xl font-bold text-secondary mb-4">Social Links</h3>
            <div className="space-y-4">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-textSecondary hover:text-secondary transition-colors"
              >
                <span className="w-20 text-textPrimary">GitHub:</span>
                View Profile
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-textSecondary hover:text-secondary transition-colors"
              >
                <span className="w-20 text-textPrimary">LinkedIn:</span>
                Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;