
import React from 'react'
import './Hero.css'
import ProductCard from './ProductCard'

const CATEGORIES = ['Fashion', 'Tech', 'Home', 'Beauty', 'Sports', 'Kids']

export default function Hero() {
    return (
        <section className="hero">

            <div className="hero-inner">

                {/* LEFT SIDE - TEXT */}
                <div className="hero-copy">

                    <p className="hero-eyebrow">
                        Global marketplace · one orbit
                    </p>

                    <h1 className="hero-heading">
                        Every shop.
                        <br />
                        One sphere.
                    </h1>

                    <p className="hero-subheading">
                        ShopSphere pulls thousands of independent sellers into a single
                        storefront, so you check out once no matter how many shops you
                        bought from.
                    </p>

                    <div className="hero-cta-group">
                        <a href="#shop" className="btn btn-primary">
                            Start shopping
                        </a>

                        <a href="#how-it-works" className="btn btn-ghost">
                            How it works
                        </a>
                    </div>

                    <dl className="hero-stats">

                        <div className="stat">
                            <dt>Sellers</dt>
                            <dd>12,400+</dd>
                        </div>

                        <div className="stat">
                            <dt>Countries</dt>
                            <dd>63</dd>
                        </div>

                        <div className="stat">
                            <dt>Items listed</dt>
                            <dd>2.1M</dd>
                        </div>

                    </dl>

                </div>

                {/* RIGHT SIDE - ORBIT */}
                <div className="hero-visual" aria-hidden="true">

                    <div className="orbit-system">

                        <div className="orbit-core">
                            <span className="orbit-core-label">
                                SS
                            </span>
                        </div>

                        <div className="orbit-ring">

                            {CATEGORIES.map((cat, i) => (
                                <span
                                    className="orbit-pill"
                                    key={cat}
                                    style={{
                                        '--i': i,
                                        '--n': CATEGORIES.length
                                    }}
                                >
                                    {cat}
                                </span>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

           <h2>Featured Products</h2>

        <div className="product-grid">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
        </section>
    )
}

