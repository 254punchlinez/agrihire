"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
   <footer className="bg-gray-50 text-gray-700 border-t border-gray-200 py-10">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 justify-between w-full">
     {/* Brand Section */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <div className="flex items-center space-x-2 mb-3">
  <Image
    src="/images/logo5.jpeg"  
    alt=" Logo"
    width={40}       
    height={40}       
    className="rounded-full" 
  />
  <h2 className="text-lg font-semibold text-gray-900">AgriHire</h2>
</div>
          </div>
          <p className="text-sm">
            Connecting farmers with the equipment they need to grow and thrive.
          </p>
        </div>

        {/* Platform Links */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Platform</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/browse-equipment" className="hover:text-green-600">Browse Equipment</Link></li>
            <li><Link href="/list-your-tools" className="hover:text-green-600">List Your Tools</Link></li>
            <li><Link href="/how-it-works" className="hover:text-green-600">How It Works</Link></li>
            <li><Link href="/pricing" className="hover:text-green-600">Pricing</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/help-center" className="hover:text-green-600">Help Center</Link></li>
            <li><Link href="/safety" className="hover:text-green-600">Safety Guidelines</Link></li>
            <li><Link href="/insurance" className="hover:text-green-600">Insurance</Link></li>
            <li><Link href="/contact" className="hover:text-green-600">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-green-600" />
              mercyochieng14@gmail.com<br />
              amytanya@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-600" />
             +254700250542<br />             +254700250543
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-green-600" />
              Nairobi, Kenya
            </li>
          </ul>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-200 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-sm px-6 max-w-7xl mx-auto text-gray-600">
        <p>© 2025 AgriHire. All rights reserved.</p>
        <div className="flex space-x-6 mt-2 md:mt-0">
          <Link href="/privacy-policy" className="hover:text-green-600">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-green-600">
            Terms of Service
          </Link>
          <Link href="/cookies" className="hover:text-green-600">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
