export default function Chapter1() {
  return (
    <section className="chapter-box container my-4 p-4 shadow-sm rounded">

      {/* Chapter Header */}
      <div className="text-center mb-4">
        <h2 className="fw-bold text-primary">📘 Chapter 1: Introduction to Computer</h2>
        <p className="text-muted"><strong>CCC Syllabus | Last Updated:</strong> 25 Dec, 2025</p>
      </div>

      {/* 1️⃣ Introduction & Definition */}
      <h4 className="section-title">1️⃣ Introduction & Definition</h4>
      <p>
        A <strong>computer</strong> is an <strong>electronic device</strong> that accepts raw data (<b>input</b>), processes it according to instructions (<b>programs</b>), stores it (<b>memory/storage</b>), and produces meaningful results (<b>output</b>). 
        It can perform tasks <strong>faster, accurately, and reliably</strong> than humans. 
      </p>
      <p className="highlight">
        <b>Key Points:</b> Fast, Accurate, Reliable, Can store huge data, Executes tasks automatically
      </p>
      <div className="text-center my-3">
        <img src="/assets/fundamentals/intro_computer.webp" alt="Computer Introduction" className="img-fluid rounded"/>
      </div>

      {/* 2️⃣ Advantages */}
      <h4 className="section-title">2️⃣ Advantages of Computer</h4>
      <ul className="list-group list-group-flush mb-3">
        <li className="list-group-item">High Speed – performs millions of operations per second</li>
        <li className="list-group-item">Accuracy – gives correct results if input & instructions are correct</li>
        <li className="list-group-item">Automation – works automatically once programmed</li>
        <li className="list-group-item">Data Storage – can store huge data</li>
        <li className="list-group-item">Multitasking – can perform multiple tasks simultaneously</li>
        <li className="list-group-item">Communication – supports internet & networking</li>
      </ul>

      {/* 3️⃣ Limitations */}
      <h4 className="section-title">3️⃣ Limitations of Computer</h4>
      <ul className="list-group list-group-flush mb-3">
        <li className="list-group-item">Cannot think or make decisions independently</li>
        <li className="list-group-item">Depends entirely on human instructions</li>
        <li className="list-group-item">Cannot feel emotions</li>
        <li className="list-group-item">High cost for advanced computers (supercomputers)</li>
      </ul>

      {/* 4️⃣ History & Generations */}
      <h4 className="section-title">4️⃣ History & Generations of Computers</h4>

      <ul className="timeline list-group list-group-flush mb-3">
        <li className="list-group-item">
          <b>1st Generation (1940-1956):</b> Used <b>vacuum tubes</b> as main components. Large in size, consumed more electricity, produced more heat, used for basic calculations.  
          <div className="text-center my-2">
            <img src="/assets/fundamentals/1st_generation.webp" alt="1st Generation Computer" className="img-fluid rounded"/>
          </div>
        </li>
        <li className="list-group-item">
          <b>2nd Generation (1956-1963):</b> Used <b>transistors</b> instead of vacuum tubes. Smaller size, faster, less heat, reliable. Used for business & scientific calculations.  
          <div className="text-center my-2">
            <img src="/assets/fundamentals/2nd_generation.webp" alt="2nd Generation Computer" className="img-fluid rounded"/>
          </div>
        </li>
        <li className="list-group-item">
          <b>3rd Generation (1964-1971):</b> Used <b>Integrated Circuits (ICs)</b>. Smaller, faster, reliable, less heat. Popular in offices & industries.  
          <div className="text-center my-2">
            <img src="/assets/fundamentals/3rd_generation.webp" alt="3rd Generation Computer" className="img-fluid rounded"/>
          </div>
        </li>
        <li className="list-group-item">
          <b>4th Generation (1971-Present):</b> Used <b>Microprocessors</b>. Personal computers, laptops, very fast, low cost. Used for education, business, and home.  
          <div className="text-center my-2">
            <img src="/assets/fundamentals/4th_generation.webp" alt="4th Generation Computer" className="img-fluid rounded"/>
          </div>
        </li>
        <li className="list-group-item">
          <b>5th Generation (Present & Future):</b> Based on <b>Artificial Intelligence (AI)</b> and parallel processing. Supercomputers, robots, smart devices, faster computation & decision making.  
          <div className="text-center my-2">
            <img src="/assets/fundamentals/5th_generation.webp" alt="5th Generation Computer" className="img-fluid rounded"/>
          </div>
        </li>
      </ul>

      {/* 5️⃣ Hardware */}
      <h4 className="section-title">5️⃣ Hardware</h4>
      <p><b>Hardware:</b> Physical components of a computer that you can touch.</p>
      <div className="row mb-3">
        <div className="col-md-4 mb-2">
          <img src="/assets/fundamentals/cpu.webp" alt="CPU" className="img-fluid rounded"/>
          <p className="text-center">CPU – Brain of Computer</p>
        </div>
        <div className="col-md-4 mb-2">
          <img src="/assets/fundamentals/memory.webp" alt="Memory" className="img-fluid rounded"/>
          <p className="text-center">Memory – Stores data & instructions</p>
        </div>
        <div className="col-md-4 mb-2">
          <img src="/assets/fundamentals/io_devices.webp" alt="Input Output Devices" className="img-fluid rounded"/>
          <p className="text-center">Input / Output Devices</p>
        </div>
      </div>
      <ul>
        <li>CPU (Central Processing Unit)</li>
        <li>Input Devices (Keyboard, Mouse, Scanner)</li>
        <li>Output Devices (Monitor, Printer, Speaker)</li>
        <li>Memory (RAM, ROM, Cache, Hard Disk)</li>
        <li>Storage (USB, SSD, CD/DVD)</li>
      </ul>

      {/* 6️⃣ Software */}
      <h4 className="section-title">6️⃣ Software</h4>
      <p><b>Software:</b> Set of instructions that tell computer how to work.</p>
      <ul>
        <li>System Software – Operating System (Windows, Linux, macOS)</li>
        <li>Application Software – MS Office, Tally, Photoshop, Browsers</li>
      </ul>

      {/* 7️⃣ CPU & Memory */}
      <h4 className="section-title">7️⃣ CPU & Memory</h4>
      <ul>
        <li><b>CPU:</b> Central Processing Unit – Brain of computer
          <ul>
            <li>ALU – Arithmetic Logic Unit – Performs arithmetic & logical operations</li>
            <li>CU – Control Unit – Controls operations of CPU & peripherals</li>
            <li>Registers – Temporary storage for instructions/data</li>
          </ul>
        </li>
        <li><b>Memory:</b> Stores data & instructions
          <ul>
            <li>Primary Memory – RAM (volatile), ROM (non-volatile)</li>
            <li>Secondary Memory – Hard Disk, SSD, Optical Disk (CD/DVD)</li>
            <li>Cache Memory – High-speed memory between CPU & RAM</li>
          </ul>
        </li>
      </ul>

      {/* 8️⃣ Input / Output Devices */}
      <h4 className="section-title">8️⃣ Input / Output Devices</h4>
      <ul>
        <li>Input Devices – Keyboard, Mouse, Scanner, Microphone</li>
        <li>Output Devices – Monitor, Printer, Speaker, Projector</li>
      </ul>

      {/* Highlights / Exam Notes */}
      <div className="alert alert-warning mt-4">
        <strong>Highlights / Exam Tips:</strong><br/>
        • Remember definitions & IPO cycle.<br/>
        • Generations with components & images – must learn.<br/>
        • CPU, Memory, Input/Output diagrams – help in exams.<br/>
        • Advantages & limitations are frequently asked.
      </div>

      <blockquote className="chapter-quote mt-3">
        💡 "A computer is fast, accurate, reliable, but depends on humans for instructions."
      </blockquote>

    </section>
  );
}
