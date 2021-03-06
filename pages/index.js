import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <div className="text-xl">
                  <video width="1600" height="600px" loop autoPlay muted>
                  <source src="/Video/FrontPage.mp4" type="video/mp4"/>
                  </video>
                  </div>
                  
            <div className= "font-bold mt-4 bg-white-300 text-white rounded p-4 shadow-lg">
              <a href="#">
                <img
                  src={ "/img/logo/1NOFF_Logo.png"}
                  alt=""
                />
              </a>
            </div>

        <p className="w-5/6 m-auto mb-5 text-center borderRadius='100px' shadow rounded-xl overflow-hidden">Our first collection "The Artless Collection" will be available soon. This collection will be ultra rare on a basis of one of one items.</p>

        <p className="w-5/6 m-auto mb-5 text-center borderRadius='100px' shadow rounded-xl overflow-hidden">How it works: When you purchase this NFT we will reach out to you to verify that you are the true owner. You will then tell us which size you would like your piece of clothing in and we will send you it. This is all verified on the matic blockchain and a QR code on the piece of clothing to verify the authenticity of the piece of clothing</p>

        <p className="w-5/6 m-auto mb-5 text-center text-center borderRadius='100px' shadow rounded-xl overflow-hidden">Our items are integrated with Augmented Reality shown in our video below. Authentication can be instantly reconignsed in Augemneted Reality. </p>

        <p className="w-5/6 m-auto mb-5 text-center text-center borderRadius='100px' shadow rounded-xl overflow-hidden">We are planning to have the 1NOFF items in the Metaverse where they will be ultra rare and unique. Future plans would be to own a virtual store and sell items in the Metaverse. Your unique items will be available in both the Metaverse and the Universe.</p>
      
    </div>
  )
} 
