import React from 'react'
import Header from '../components/Header'
import '../styles/Index.css'

const Index = () => {
  return (
    <div className='container'>
        <Header />
        <section className='index'>
          <div className='index__top'>
            <div className='index__left'>
              <div className='index__left__top'></div>
              <div className='index__left__bottom'></div>
            </div>
            <div className='index__right'>
              <div className='index__right__sidebar'>
                <div className='index__right__sidebar__stocks'>
                  <h4>Stocks</h4>
                  <ul>
                    <li>
                      <p>AAPL</p>
                      <div className='price__percentage'>
                        <p>205.99</p>
                        <small>3.55%</small>
                      </div>
                    </li>
                    <li>
                      <p>AAPL</p>
                      <div className='price__percentage'>
                        <p>205.99</p>
                        <small>3.55%</small>
                      </div>
                    </li>
                    <li>
                      <p>AAPL</p>
                      <div className='price__percentage'>
                        <p>205.99</p>
                        <small>3.55%</small>
                      </div>
                    </li>
                    <li>
                      <p>AAPL</p>
                      <div className='price__percentage'>
                        <p>205.99</p>
                        <small>3.55%</small>
                      </div>
                    </li>
                    <li>
                      <p>AAPL</p>
                      <div className='price__percentage'>
                        <p>205.99</p>
                        <small>3.55%</small>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='index__right__sidebar__crypto'>
                <h4>Crypto</h4>
                  <ul>
                    <li>
                      <p>AAPL</p>
                      <div className='price__percentage'>
                        <p>205.99</p>
                        <small>3.55%</small>
                      </div>
                    </li>
                    <li>
                      <p>AAPL</p>
                      <div className='price__percentage'>
                        <p>205.99</p>
                        <small>3.55%</small>
                      </div>
                    </li>
                    <li>
                      <p>AAPL</p>
                      <div className='price__percentage'>
                        <p>205.99</p>
                        <small>3.55%</small>
                      </div>
                    </li>
                    <li>
                      <p>AAPL</p>
                      <div className='price__percentage'>
                        <p>205.99</p>
                        <small>3.55%</small>
                      </div>
                    </li>
                    <li>
                      <p>AAPL</p>
                      <div className='price__percentage'>
                        <p>205.99</p>
                        <small>3.55%</small>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Index