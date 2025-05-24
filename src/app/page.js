import Puzzle15 from "../components/puzzle15";

module.exports = function Home() {
  return (
    // Remove the background-image from CSS
    // Add inline style to the main element:

    <main
      className="flex min-h-screen flex-col items-center justify-center p-4"
      style={{
        backgroundImage: 'url("/images/game15-background.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Top container with title */}
      <div className="w-full max-w-md bg-violet-800 rounded-t-lg p-4 text-center">
        {/* <div className="w-full max-w-md bg-gray-200 rounded-t-lg p-4 text-center"> */}
        <h1 className="text-4xl font-bold text-white">Игра 15</h1>
      </div>

      {/* Game container - just the puzzle board */}
      <div className="w-full max-w-md bg-violet-700 p-4">
        {/* <div className="w-full max-w-md bg-gray-300 p-4"> */}
        <Puzzle15 />
      </div>

      {/* Bottom container with moves and button
      <div className="w-full max-w-md bg-gray-200 rounded-b-lg p-4 text-center">
        <p className="text-lg text-gray-800 mb-3">Ходов: 0</p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          New Game
        </button>
      </div> */}
    </main>
  );
};
