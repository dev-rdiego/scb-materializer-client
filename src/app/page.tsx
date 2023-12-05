import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(/images/background.jpg)' }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <MainHero />
            <DescriptionCard />
            <Actions />
          </div>
        </div>
      </div>

    </main>
  )
}

const Actions = ({ }) => {
  return (
    <div className="flex gap-10 justify-center">
      <Link href="/how-to-use">
        <button className="btn btn-primary">How to use</button>
      </Link>
      <Link href="/calculator">
        <button className="btn btn-accent">Go to calculator</button>
      </Link>
    </div>
  );
}

const DescriptionCard = ({ }) => {
  return (
    <div className="card bg-base-100 shadow-xl mb-5">
      <div className="card-body">
        <p className="">SimCity BuildIt Materializer is a powerful and intuitive tool designed to revolutionize the way you calculate and manage raw materials for crafting in SimCity BuildIt.</p>
        <p className=""> Whether you&apos;re a seasoned mayor or just starting your city-building journey, this app is your ultimate companion for optimizing resource allocation and streamlining the crafting process.</p>
      </div>
    </div>
  );
}

const MainHero = ({ }) => {
  return (
    <>
      <img src="/images/hero.png" alt="simcity_logo" className="mb-12 max-h-40 mx-auto" />
      <h1 className="text-3xl font-bold">Welcome to</h1>
      <h1 className="mb-5 text-5xl font-bold">SimCity BuildIt Materializer</h1>
    </>
  );
}
