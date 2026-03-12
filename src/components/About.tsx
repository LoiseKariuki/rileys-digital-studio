import { Users, Target, Award, Heart } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#1F3A5F] mb-6">
              About Riley's Digital Studio
            </h2>

            <p className="text-lg text-[#4A525A] mb-4 leading-relaxed">
              Riley's Digital Studio was founded on a simple belief: every business deserves professional digital solutions — not just the ones with enterprise budgets.
            </p>

            <p className="text-lg text-[#4A525A] mb-4 leading-relaxed">
              Helping businesses and individuals succeed digitally with professional, results-driven solutions. Whether you're launching your first website or scaling a complex platform, we bring the technical depth and creative thinking to get you there.
            </p>

            <p className="text-lg text-[#4A525A] mb-8 leading-relaxed">
              At Riley's Digital Studio we not only move fast but also move right.
            </p>

            {/* Feature Icons */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1F3A5F] to-[#3F6C9B] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-[#1F3A5F] mb-1">Results-Driven</h4>
                  <p className="text-sm text-[#7A838C]">
                    Focused on delivering measurable outcomes
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1F3A5F] to-[#3F6C9B] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-[#1F3A5F] mb-1">Professional</h4>
                  <p className="text-sm text-[#7A838C]">
                    High-quality work with attention to detail
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1F3A5F] to-[#3F6C9B] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-[#1F3A5F] mb-1">Client-Focused</h4>
                  <p className="text-sm text-[#7A838C]">
                    Your success is our priority
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1F3A5F] to-[#3F6C9B] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-[#1F3A5F] mb-1">Passionate</h4>
                  <p className="text-sm text-[#7A838C]">
                    We love what we do and it shows
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/loise.webp"
                alt="About Riley's Digital Studio"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F3A5F]/10 to-[#3F6C9B]/10"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#8FAFC8] rounded-full blur-3xl opacity-40"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#3F6C9B] rounded-full blur-3xl opacity-30"></div>
          </div>

        </div>
      </div>
    </section>
  );
}