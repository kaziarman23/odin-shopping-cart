function HomePage() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the React Shop!</h1>
      <p className="text-gray-700 mb-4">
        Browse our products and add items to your cart.
      </p>
      <img
        src="https://i.pinimg.com/1200x/f9/67/f0/f967f0a1272703ff28d4c724bd59e639.jpg"
        alt="Shop"
        className="mx-auto rounded shadow"
      />
    </div>
  );
}

export default HomePage;
