import React from 'react';
import { ArrowLeft, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const IMSWGEvents = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white" style={{ paddingTop: '100px' }}>

      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-4">
        <button
          onClick={() => navigate('/imswg')}
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold">Back to IMSWG</span>
        </button>
      </div>

      {/* IMSWG 2026 - Quarter 1 Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest mb-4 block text-cyan-400"
                  style={{ letterSpacing: '0.15em' }}>
              Next Forum
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white"
                style={{ letterSpacing: '-0.01em', fontFamily: '"SF Pro Display", sans-serif' }}>
              IMSWG 2026 - Quarter 1
            </h2>
            <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto"
               style={{ fontFamily: 'Georgia, serif' }}>
              High-Level Expert Meeting: Optimizing Maritime Security for Sustainable Blue Economy Development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Flyer Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>
              <img 
                src="/imswgq1.jpeg"
                alt="IMSWG 2026 Forum"
                className="relative rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Event Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Forum Theme</h3>
                <p className="text-lg text-slate-300 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  Optimizing Maritime Security for Sustainable Blue Economy Development: A Strategic Framework for the Gulf of Guinea
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-cyan-400" />
                  <h4 className="text-lg font-bold text-white">Event Details</h4>
                </div>
                <div className="space-y-3 text-slate-300">
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span className="font-semibold text-white">Date:</span> 17th March, 2026
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span className="font-semibold text-white">Format:</span> Virtual 
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span className="font-semibold text-white">Status:</span> Registration Opened
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/imswg-forum')}
                  className="flex-1 px-8 py-4 bg-cyan-400 hover:bg-cyan-500 text-slate-900 rounded-xl font-bold transition-all hover:scale-105 shadow-lg cursor-pointer"
                >
                  Register Interest
                </button>
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                <p className="text-sm text-cyan-100 text-center">
                  📧 For sponsorship & inquiries: <a href="mailto:info@gogmi.org.gh" className="font-bold underline">info@gogmi.org.gh</a> | 📱 +233504953400
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IMSWGEvents;
