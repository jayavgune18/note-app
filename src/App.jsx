import { Plus } from 'lucide-react';
import { X } from 'lucide-react';
import { useState } from 'react';
function App() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tasks, setTasks] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    ///  alert("submit")
    let copyTask = [...tasks];
    copyTask.push({ title, desc });
    setTasks(copyTask);
    setTitle(" ");
    setDesc(" ");

  }
  const deleteHandler = (index) => {
    let copyTask = [...tasks];
    copyTask.splice(index, 1);
    setTasks(copyTask);
  }

return (
  <>
    <div className="relative min-h-screen flex flex-col text-gray-100
      bg-gradient-to-br from-[#0f1117] via-[#111827] to-[#020617]
      px-4 sm:px-10 py-10">

      {/* ===== TOP HEADING ===== */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-wide text-white">
          📝 Notes App
        </h1>
        <p className="text-gray-400 mt-2">
          Capture your thoughts, ideas, and tasks effortlessly
        </p>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="flex-grow">
        <div className="max-w-[1200px] mx-auto grid gap-6 sm:gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">

          {/* Add Note Card */}
          <div
            onClick={() => setShow(true)}
            className="cursor-pointer min-h-[140px] bg-[#161a23] border border-dashed border-white/10
            rounded-2xl flex items-center justify-center flex-col gap-2 p-6
            hover:scale-105 transition-all duration-300 hover:border-[#a78bfa]"
          >
            <Plus className="w-12 h-12 rounded-full bg-[#a78bfa] p-2 text-[#0f1117]" />
            <p className="text-gray-400 tracking-wide">Add a new Note</p>
          </div>

          {/* Popup */}
          {show && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
              <div className="bg-[#161a23] w-full max-w-md rounded-2xl p-6 relative border border-white/10">

                <button
                  onClick={() => setShow(false)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-rose-400"
                >
                  <X />
                </button>

                <h3 className="text-xl font-semibold text-gray-200 mb-4">
                  Add a New Note
                </h3>

                <form onSubmit={SubmitHandler} className="flex flex-col gap-4">
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full rounded-lg bg-[#0f1117] border border-white/10
                    px-4 py-2 text-gray-100 placeholder:text-gray-500
                    focus:outline-none focus:border-[#a78bfa]"
                    placeholder="Enter title..."
                  />

                  <textarea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    rows="6"
                    className="w-full rounded-lg bg-[#0f1117] border border-white/10
                    px-4 py-2 text-gray-100 placeholder:text-gray-500
                    focus:outline-none focus:border-[#a78bfa] resize-none"
                    placeholder="Enter description..."
                  />

                  <button
                    type="submit"
                    className="bg-[#a78bfa] hover:bg-[#8b5cf6] transition
                    py-3 rounded-xl font-semibold tracking-wide text-[#0f1117]"
                  >
                    Add Note
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Notes */}
          {tasks.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#161a23] border border-white/10 rounded-2xl p-5
              hover:scale-105 transition-all duration-300"
            >
              <h1 className="text-lg sm:text-xl font-semibold text-gray-100">
                {item.title}
              </h1>

              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                {item.desc}
              </p>

              <button
                onClick={() => deleteHandler(index)}
                className="absolute top-3 right-3 bg-rose-500/20 text-rose-400
                rounded-full p-1 hover:bg-rose-500/30"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="text-center mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} Notes App • Built with React & Tailwind
      </footer>
    </div>
  </>
);



}

export default App
