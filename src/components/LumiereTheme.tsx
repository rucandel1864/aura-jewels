import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '@/stores/cartStore';
import { fetchProducts, ShopifyProduct } from '@/lib/shopify';
import { CartDrawer } from '@/components/CartDrawer';
import { toast } from 'sonner';

// Asset imports
import cadImage from '@/assets/cad.jpg';
import mainImage3 from '@/assets/main-image-3.jpeg';
import mainImage4 from '@/assets/main-image-4.jpeg';
import mainImage5 from '@/assets/main-image-5.jpeg';
import mainImage6 from '@/assets/main-image-6.jpeg';
import carat1ct from '@/assets/carat-1ct.jpeg';
import carat2ct from '@/assets/carat-2ct.jpeg';
import carat3ct from '@/assets/carat-3ct.jpeg';

const LumiereTheme = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [selectedCarat, setSelectedCarat] = useState('2CT');
  const [selectedSize, setSelectedSize] = useState('7');
  const [activeImage, setActiveImage] = useState(0);
  const [email, setEmail] = useState('');
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch product from Shopify
  useEffect(() => {
    fetchProducts(1).then((products) => {
      if (products[0]) setProduct(products[0]);
    });
  }, []);

  const assets = {
    heroVideo: '/ring-video.mp4',
    cadImage: cadImage,
    gallery: [mainImage3, mainImage4, mainImage5, mainImage6],
    variants: {
      '1CT': carat1ct,
      '2CT': carat2ct,
      '3CT': carat3ct,
    } as Record<string, string>,
  };

  const caratOptions = [
    { size: '1CT', price: 99.99, mm: '6.5mm' },
    { size: '2CT', price: 149.99, mm: '8.0mm' },
    { size: '3CT', price: 199.99, mm: '9.0mm' },
  ];

  const productHighlights = [
    'Round brilliant-cut moissanite with exceptional fire',
    '925 sterling silver with 18K white gold plating',
    'Passes standard thermal diamond testers',
    'Handcrafted with pavé-set accent stones',
    'Complimentary resize within 60 days',
  ];

  const features = [
    { icon: '✧', title: 'More Brilliance', desc: '2.4x more fire than diamonds. The sparkle that captures every light.' },
    { icon: '◇', title: 'Ethically Perfect', desc: 'Lab-created with zero environmental impact. Beauty without compromise.' },
    { icon: '❖', title: 'Diamond Certified', desc: 'Passes thermal diamond testers. Your secret to keep.' },
  ];

  const testimonials = [
    { name: 'Sarah M.', text: "Absolutely stunning! Everyone thinks it's a real diamond. The sparkle is incredible.", rating: 5 },
    { name: 'Jessica L.', text: "Best purchase I've made. The quality exceeded my expectations. Fast shipping too!", rating: 5 },
    { name: 'Emily R.', text: "My fiancé proposed with this ring and I couldn't be happier. It's perfect.", rating: 5 },
  ];

  const scrollToProduct = () => {
    document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToStory = () => {
    document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Get price from Shopify product or fallback to static
  const getPrice = () => {
    if (!product) return caratOptions.find((c) => c.size === selectedCarat)?.price || 149.99;

    const variant = product.node.variants.edges.find((v) => {
      const opts = v.node.selectedOptions;
      return opts.some((o) => o.value === selectedCarat);
    });

    if (variant) {
      return parseFloat(variant.node.price.amount);
    }

    return caratOptions.find((c) => c.size === selectedCarat)?.price || 149.99;
  };

  const currentPrice = getPrice();

  const handleAddToCart = async () => {
    if (!product) {
      toast.error('Product not available');
      return;
    }

    setIsAddingToCart(true);

    try {
      // Find variant matching selected carat + size
      const variant = product.node.variants.edges.find((v) => {
        const opts = v.node.selectedOptions;
        const caratMatch = opts.some((o) => o.value === selectedCarat);
        const sizeMatch = opts.some((o) => o.value === selectedSize);
        return caratMatch && sizeMatch;
      });

      if (variant) {
        await addItem({
          product,
          variantId: variant.node.id,
          variantTitle: variant.node.title,
          price: variant.node.price,
          quantity: 1,
          selectedOptions: variant.node.selectedOptions,
        });
        toast.success('Added to bag', {
          description: `${selectedCarat} · Size ${selectedSize}`,
        });
      } else {
        toast.error('Variant not available', {
          description: 'Please select a different combination',
        });
      }
    } catch (error) {
      toast.error('Failed to add to cart');
      console.error(error);
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', 'Times New Roman', serif", background: '#fff', color: '#1a1a1a', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Karla:wght@300;400;500&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        
        ::selection { background: rgba(183, 153, 98, 0.2); color: #1a1a1a; }
        
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #fff; }
        ::-webkit-scrollbar-thumb { background: #d4c4a8; border-radius: 3px; }
        
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes logoReveal { 0% { letter-spacing: 20px; opacity: 0; } 100% { letter-spacing: 8px; opacity: 1; } }
        
        .nav-item { position: relative; }
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: #b79962;
          transition: width 0.4s ease;
        }
        .nav-item:hover::after { width: 100%; }
        .nav-item:hover { color: #1a1a1a; }
        
        .btn-primary { transition: all 0.4s ease; }
        .btn-primary:hover { background: #1a1a1a !important; color: #fff !important; }
        
        .btn-secondary { transition: all 0.4s ease; }
        .btn-secondary:hover { background: #b79962 !important; border-color: #b79962 !important; color: #fff !important; }
        
        .cta-bar { transition: all 0.3s ease; }
        .cta-bar:hover { background: #b79962 !important; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.15); }
        
        .carat-btn { transition: all 0.3s ease; }
        .carat-btn:hover { border-color: #b79962; background: rgba(183, 153, 98, 0.05); }
        
        .thumb { transition: all 0.3s ease; }
        .thumb:hover { border-color: #b79962; }
        
        .footer-link {
          display: block;
          font-family: 'Karla', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #666;
          text-decoration: none;
          margin-bottom: 12px;
          transition: color 0.3s ease;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          text-align: left;
        }
        .footer-link:hover { color: #b79962; }

        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .intro-grid { grid-template-columns: 1fr !important; }
          .product-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .testimonial-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
          .nav-desktop { display: none !important; }
          .carat-comparison-buttons { flex-wrap: wrap !important; }
        }
      `}</style>

      {/* Loading Screen */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: '#fff',
          zIndex: 10000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: isLoaded ? 0 : 1,
          visibility: isLoaded ? 'hidden' : 'visible',
          transition: 'opacity 0.8s ease, visibility 0.8s ease',
        }}
      >
        <h1 style={{ fontSize: '32px', fontWeight: 400, letterSpacing: '8px', color: '#1a1a1a', animation: 'logoReveal 1.5s ease forwards' }}>Lumière</h1>
        <div style={{ width: '40px', height: '1px', background: '#b79962', marginTop: '24px', opacity: 0, animation: 'fadeIn 0.5s ease forwards 1s' }} />
      </div>

      {/* Header */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrollY > 50 ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
          backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none',
          borderBottom: scrollY > 50 ? '1px solid #e8e4dc' : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 5%', maxWidth: '1600px', margin: '0 auto' }}>
          <nav className="nav-desktop" style={{ display: 'flex', gap: '40px' }}>
            {['The Collection', 'Our Story', 'Size Guide'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  if (item === 'The Collection') scrollToProduct();
                  else if (item === 'Our Story') scrollToStory();
                }}
                className="nav-item"
                style={{
                  fontFamily: 'Karla, sans-serif',
                  fontSize: '12px',
                  fontWeight: 400,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: '#666',
                  textDecoration: 'none',
                  padding: '4px 0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {item}
              </button>
            ))}
          </nav>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 400, letterSpacing: '6px', color: '#1a1a1a' }}>Lumière</h1>
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <CartDrawer />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%', maxWidth: '1600px', margin: '0 auto', padding: '0 5%', gap: '80px', alignItems: 'center' }}>
          {/* Left Content */}
          <div style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(40px)', transition: 'all 1s ease 0.3s' }}>
            <p style={{ fontFamily: 'Karla, sans-serif', fontSize: '11px', fontWeight: 400, letterSpacing: '3px', textTransform: 'uppercase', color: '#b79962', marginBottom: '24px' }}>The Brilliance Halo Collection</p>
            <h2 style={{ fontSize: 'clamp(42px, 5vw, 64px)', fontWeight: 300, lineHeight: 1.15, color: '#1a1a1a', marginBottom: '32px' }}>
              Eternal Fire.
              <br />
              <span style={{ fontStyle: 'italic', color: '#8a7a5a' }}>Timeless Elegance.</span>
            </h2>
            <p style={{ fontFamily: 'Karla, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.9, color: '#666', maxWidth: '440px', marginBottom: '40px' }}>
              Discover the art of brilliance with our round-cut moissanite halo ring. Handcrafted in 925 sterling silver with 18K white gold plating.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button className="btn-primary" onClick={scrollToProduct} style={{ fontFamily: 'Karla, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', padding: '16px 40px', background: 'transparent', border: '1px solid #1a1a1a', color: '#1a1a1a', cursor: 'pointer' }}>
                Discover
              </button>
              <button className="btn-secondary" onClick={scrollToStory} style={{ fontFamily: 'Karla, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', padding: '16px 40px', background: 'transparent', border: '1px solid #d4c4a8', color: '#8a7a5a', cursor: 'pointer' }}>
                Our Story
              </button>
            </div>
          </div>

          {/* Right Video */}
          <div style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateX(0)' : 'translateX(40px)', transition: 'all 1s ease 0.5s' }}>
            <div style={{ aspectRatio: '16/10', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', minHeight: '450px' }}>
              <video src={assets.heroVideo} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            {/* CTA Bar Below Video */}
            <button className="cta-bar" onClick={scrollToProduct} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: '20px', background: '#1a1a1a', padding: '20px 28px', border: 'none', cursor: 'pointer' }}>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontFamily: 'Karla, sans-serif', fontSize: '11px', letterSpacing: '2px', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>Starting from</p>
                <p style={{ fontFamily: 'Karla, sans-serif', fontSize: '28px', fontWeight: 500, color: '#fff', marginTop: '4px' }}>${caratOptions[0].price}</p>
              </div>
              <span style={{ fontFamily: 'Karla, sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Shop Now <span style={{ fontSize: '18px' }}>→</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Marquee Bar */}
      <section style={{ background: '#1a1a1a', padding: '16px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: '60px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          {['Free Shipping Worldwide', '60-Day Returns', 'Passes Diamond Tester', 'Ethically Created', 'Lifetime Warranty'].map((item, i) => (
            <React.Fragment key={item}>
              <span style={{ fontFamily: 'Karla, sans-serif', fontSize: '11px', fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase', color: '#fff', whiteSpace: 'nowrap' }}>{item}</span>
              {i < 4 && <span style={{ color: '#b79962', fontSize: '6px' }}>◆</span>}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Intro Section */}
      <section id="story" style={{ padding: 0, background: '#fff' }}>
        <div className="intro-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', minHeight: '70vh' }}>
          <div style={{ background: `url(${assets.cadImage}) center/cover`, minHeight: '500px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '100px 80px', background: '#fff' }}>
            <p style={{ fontFamily: 'Karla, sans-serif', fontSize: '12px', fontWeight: 400, letterSpacing: '3px', textTransform: 'uppercase', color: '#b79962', marginBottom: '28px' }}>The Lumière Difference</p>
            <h2 style={{ fontSize: 'clamp(36px, 4.5vw, 52px)', fontWeight: 300, lineHeight: 1.25, color: '#1a1a1a', marginBottom: '50px' }}>
              A stone born from the stars, <span style={{ fontStyle: 'italic' }}>crafted for the extraordinary.</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
              {features.map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: '24px' }}>
                  <span style={{ fontSize: '24px', color: '#b79962', marginTop: '2px' }}>{f.icon}</span>
                  <div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 500, marginBottom: '10px', color: '#1a1a1a' }}>{f.title}</h3>
                    <p style={{ fontFamily: 'Karla, sans-serif', fontSize: '16px', fontWeight: 300, lineHeight: 1.8, color: '#888' }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="product" style={{ padding: '100px 5%', background: '#fff' }}>
        <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', maxWidth: '1400px', margin: '0 auto', alignItems: 'start' }}>
          {/* Product Images */}
          <div>
            <div style={{ aspectRatio: '1', background: '#fff', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src={assets.gallery[activeImage]} alt="Lumière ring" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
              {assets.gallery.map((img, i) => (
                <div key={i} className="thumb" onClick={() => setActiveImage(i)} style={{ aspectRatio: '1', cursor: 'pointer', overflow: 'hidden', border: activeImage === i ? '2px solid #b79962' : '1px solid #e8e4dc' }}>
                  <img src={img} alt={`View ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div style={{ paddingTop: '20px' }}>
            <p style={{ fontFamily: 'Karla, sans-serif', fontSize: '11px', fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase', color: '#b79962', marginBottom: '12px' }}>The Collection</p>
            <h2 style={{ fontSize: '36px', fontWeight: 300, color: '#1a1a1a', marginBottom: '8px' }}>Brilliance Halo Ring</h2>
            <p style={{ fontFamily: 'Karla, sans-serif', fontSize: '13px', color: '#999', marginBottom: '24px' }}>Round-cut moissanite · Sterling silver · 18K white gold</p>
            <p style={{ fontSize: '32px', fontWeight: 300, color: '#1a1a1a', marginBottom: '24px' }}>${currentPrice.toFixed(2)}</p>

            <ul style={{ listStyle: 'none', marginBottom: '32px' }}>
              {productHighlights.map((h, i) => (
                <li key={i} style={{ fontFamily: 'Karla, sans-serif', fontSize: '14px', fontWeight: 300, color: '#666', marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#b79962' }}>•</span>
                  {h}
                </li>
              ))}
            </ul>

            {/* Carat Selection */}
            <div style={{ marginBottom: '32px' }}>
              <p style={{ fontFamily: 'Karla, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#666', marginBottom: '16px' }}>Carat Size</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                {caratOptions.map((opt) => (
                  <button key={opt.size} className="carat-btn" onClick={() => setSelectedCarat(opt.size)} style={{ flex: 1, padding: '20px', background: selectedCarat === opt.size ? 'rgba(183, 153, 98, 0.08)' : '#fff', border: selectedCarat === opt.size ? '2px solid #b79962' : '1px solid #e8e4dc', cursor: 'pointer', textAlign: 'center' }}>
                    <span style={{ fontFamily: 'Karla, sans-serif', fontSize: '14px', fontWeight: 500, color: '#1a1a1a', display: 'block' }}>{opt.size}</span>
                    <span style={{ fontFamily: 'Karla, sans-serif', fontSize: '11px', color: '#999', display: 'block', marginTop: '4px' }}>{opt.mm}</span>
                    <span style={{ fontFamily: 'Karla, sans-serif', fontSize: '12px', color: selectedCarat === opt.size ? '#b79962' : '#888', display: 'block', marginTop: '4px' }}>${opt.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Ring Size */}
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <p style={{ fontFamily: 'Karla, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#666' }}>Ring Size</p>
                <button style={{ fontFamily: 'Karla, sans-serif', fontSize: '12px', color: '#b79962', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Size Guide</button>
              </div>
              <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} style={{ width: '100%', padding: '18px 20px', background: '#fff', border: '1px solid #e8e4dc', color: '#1a1a1a', fontFamily: 'Karla, sans-serif', fontSize: '14px', cursor: 'pointer', appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 20px center' }}>
                {['5', '6', '7', '8', '9'].map((s) => (
                  <option key={s} value={s}>
                    Size {s} {s === '7' ? '(Most Popular)' : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* Add to Bag */}
            <button
              className="btn-primary"
              onClick={handleAddToCart}
              disabled={isAddingToCart || !product}
              style={{ width: '100%', padding: '20px', background: '#1a1a1a', border: 'none', color: '#fff', fontFamily: 'Karla, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', cursor: isAddingToCart ? 'wait' : 'pointer', marginBottom: '16px', opacity: isAddingToCart ? 0.7 : 1 }}
            >
              {isAddingToCart ? 'Adding...' : `Add to Bag — $${currentPrice.toFixed(2)}`}
            </button>
            <p style={{ fontFamily: 'Karla, sans-serif', fontSize: '12px', color: '#999', textAlign: 'center', marginBottom: '32px' }}>
              or 4 interest-free payments of ${(currentPrice / 4).toFixed(2)} with <span style={{ color: '#1a1a1a', fontWeight: 500 }}>afterpay</span>
            </p>

            {/* Trust Icons */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', paddingTop: '32px', borderTop: '1px solid #e8e4dc' }}>
              {[
                { icon: '◇', text: 'Free Shipping' },
                { icon: '↻', text: '60-Day Returns' },
                { icon: '✧', text: 'Lifetime Care' },
              ].map((t, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: '16px', color: '#b79962', display: 'block', marginBottom: '8px' }}>{t.icon}</span>
                  <span style={{ fontFamily: 'Karla, sans-serif', fontSize: '11px', color: '#888' }}>{t.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Carat Comparison */}
      <section style={{ padding: '120px 5%', background: '#fff', textAlign: 'center' }}>
        <p style={{ fontFamily: 'Karla, sans-serif', fontSize: '11px', fontWeight: 400, letterSpacing: '3px', textTransform: 'uppercase', color: '#b79962', marginBottom: '24px' }}>Find Your Size</p>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 300, color: '#1a1a1a', marginBottom: '16px' }}>Compare Carat Sizes</h2>
        <p style={{ fontFamily: 'Karla, sans-serif', fontSize: '15px', fontWeight: 300, color: '#888', marginBottom: '60px' }}>See the actual size difference. Choose the presence that suits your style.</p>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ aspectRatio: '4/3', background: '#fff', marginBottom: '32px', overflow: 'hidden' }}>
            <img src={assets.variants[selectedCarat]} alt={`${selectedCarat} comparison`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="carat-comparison-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
            {caratOptions.map((opt) => (
              <button key={opt.size} className="carat-btn" onClick={() => setSelectedCarat(opt.size)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px 32px', background: selectedCarat === opt.size ? 'rgba(183, 153, 98, 0.08)' : '#fff', border: selectedCarat === opt.size ? '2px solid #b79962' : '1px solid #e8e4dc', cursor: 'pointer', minWidth: '120px' }}>
                <span style={{ fontFamily: 'Karla, sans-serif', fontSize: '16px', fontWeight: 500, color: '#1a1a1a' }}>{opt.size}</span>
                <span style={{ fontFamily: 'Karla, sans-serif', fontSize: '12px', color: '#999', marginTop: '4px' }}>{opt.mm}</span>
                <span style={{ fontFamily: 'Karla, sans-serif', fontSize: '13px', color: selectedCarat === opt.size ? '#b79962' : '#888', marginTop: '8px', fontWeight: 500 }}>${opt.price}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '120px 5%', background: '#fff' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{ fontFamily: 'Karla, sans-serif', fontSize: '11px', fontWeight: 400, letterSpacing: '3px', textTransform: 'uppercase', color: '#b79962', marginBottom: '24px' }}>What They Say</p>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 300, color: '#1a1a1a' }}>Real Reviews, Real Sparkle</h2>
        </div>
        <div className="testimonial-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
          {testimonials.map((r, i) => (
            <div key={i} style={{ background: '#fff', padding: '40px', textAlign: 'center', border: '1px solid #e8e4dc' }}>
              <div style={{ marginBottom: '16px', color: '#b79962' }}>{'★'.repeat(r.rating)}</div>
              <p style={{ fontFamily: 'Karla, sans-serif', fontSize: '14px', fontWeight: 300, lineHeight: 1.8, color: '#666', marginBottom: '24px', fontStyle: 'italic' }}>"{r.text}"</p>
              <p style={{ fontFamily: 'Karla, sans-serif', fontSize: '12px', fontWeight: 500, color: '#1a1a1a', letterSpacing: '1px' }}>— {r.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ padding: '100px 5%', background: '#1a1a1a', textAlign: 'center' }}>
        <p style={{ fontFamily: 'Karla, sans-serif', fontSize: '11px', fontWeight: 400, letterSpacing: '3px', textTransform: 'uppercase', color: '#b79962', marginBottom: '24px' }}>Newsletter</p>
        <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: 300, color: '#fff', marginBottom: '16px' }}>Join the Inner Circle</h2>
        <p style={{ fontFamily: 'Karla, sans-serif', fontSize: '14px', fontWeight: 300, color: '#888', marginBottom: '40px' }}>New arrivals, exclusive offers, and styling inspiration.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email) {
              toast.success('Welcome to Lumière!');
              setEmail('');
            }
          }}
          style={{ display: 'flex', maxWidth: '480px', margin: '0 auto', flexWrap: 'wrap', gap: '0' }}
        >
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ flex: 1, minWidth: '200px', padding: '18px 24px', background: 'transparent', border: '1px solid #333', borderRight: 'none', color: '#fff', fontFamily: 'Karla, sans-serif', fontSize: '14px', outline: 'none' }} />
          <button type="submit" style={{ padding: '18px 32px', background: '#b79962', border: '1px solid #b79962', color: '#1a1a1a', fontFamily: 'Karla, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer' }}>
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer style={{ padding: '80px 5% 40px', background: '#fff', borderTop: '1px solid #e8e4dc' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '60px', maxWidth: '1400px', margin: '0 auto 60px' }}>
          <div>
            <h3 style={{ fontSize: '22px', fontWeight: 400, letterSpacing: '4px', color: '#1a1a1a', marginBottom: '20px' }}>Lumière</h3>
            <p style={{ fontFamily: 'Karla, sans-serif', fontSize: '13px', fontWeight: 300, lineHeight: 1.8, color: '#888', maxWidth: '280px' }}>The eternal brilliance of moissanite, crafted for those who appreciate true beauty and value.</p>
          </div>
          <div>
            <h4 style={{ fontFamily: 'Karla, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: '#666', marginBottom: '24px' }}>Shop</h4>
            <button className="footer-link" onClick={scrollToProduct}>
              The Collection
            </button>
            <button className="footer-link" onClick={scrollToProduct}>
              Ring Sizer
            </button>
          </div>
          <div>
            <h4 style={{ fontFamily: 'Karla, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: '#666', marginBottom: '24px' }}>Help</h4>
            <Link to="/shipping" className="footer-link">
              Shipping
            </Link>
            <Link to="/returns" className="footer-link">
              Returns
            </Link>
          </div>
          <div>
            <h4 style={{ fontFamily: 'Karla, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: '#666', marginBottom: '24px' }}>Contact</h4>
            <a href="mailto:hello@lumiere.com" className="footer-link">
              Email Us
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              Instagram
            </a>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '32px', borderTop: '1px solid #e8e4dc', maxWidth: '1400px', margin: '0 auto', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ fontFamily: 'Karla, sans-serif', fontSize: '11px', color: '#999' }}>© {new Date().getFullYear()} Lumière. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link to="/privacy" style={{ fontFamily: 'Karla, sans-serif', fontSize: '11px', color: '#999', textDecoration: 'none' }}>
              Privacy
            </Link>
            <Link to="/terms" style={{ fontFamily: 'Karla, sans-serif', fontSize: '11px', color: '#999', textDecoration: 'none' }}>
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LumiereTheme;
