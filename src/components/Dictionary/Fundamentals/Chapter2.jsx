export default function Chapter2() {
  return (
    <section className="chapter-box">
      <h2>💻 Chapter 2: Computer Hardware</h2>
      <p className="updated-text">Last Updated : 23 Jul, 2025</p>

      <p>
        <b>Computer Hardware</b> refers to the physical components of a computer
        that you can see and touch. These components work together to process
        input and deliver output based on user instructions.
      </p>

      <hr />

      {/* Major Components */}
      <h3>🔹 Major Components of Computer</h3>
      <p>A computer system mainly consists of two major components:</p>
      <ul>
        <li><b>Hardware</b></li>
        <li><b>Software</b></li>
      </ul>
      <p>
        In this chapter, we focus only on <b>Computer Hardware</b>.
      </p>

      <hr />

      {/* What is Hardware */}
      <h3>🔹 What is Computer Hardware?</h3>
      <p>
        <b>Computer Hardware</b> are the physical devices of a computer system
        that we can see and touch. These devices help in performing input,
        processing, storage, and output operations.
      </p>
      <p>
        <b>Examples:</b> Monitor, CPU, Keyboard, Mouse, Joystick, Printer, etc.
      </p>

      <hr />

      {/* Hardware Parts */}
      <h3>🔹 Computer Hardware Parts</h3>
      <p>Computer hardware is divided into the following categories:</p>
      <ul>
        <li>Input Devices</li>
        <li>Output Devices</li>
        <li>Storage Devices</li>
        <li>Internal Hardware Components</li>
      </ul>

      <hr />

      {/* Input Devices */}
      <h3>🔹 Input Devices</h3>
      <p>
        <b>Input Devices</b> allow users to enter data or commands into the
        computer. These devices convert user input into a machine-readable form.
      </p>

      <ul>
        <li>
          <b>Keyboard:</b> Most common input device with 104 keys including
          alphabet, numeric and function keys.
        </li>
        <li>
          <b>Mouse:</b> A pointing device used to move the cursor and select
          items on the screen.
        </li>
        <li>
          <b>Scanner:</b> Converts physical documents or images into digital
          format.
        </li>
        <li>
          <b>Trackball:</b> A stationary pointing device with a movable ball.
        </li>
        <li>
          <b>Light Pen:</b> A light-sensitive pen used to draw or select objects
          on the screen.
        </li>
        <li>
          <b>Microphone:</b> Converts sound into electrical signals.
        </li>
        <li>
          <b>OCR:</b> Optical Character Reader converts printed text into digital
          text.
        </li>
        <li>
          <b>Bar Code Reader:</b> Reads barcodes and converts them into digital
          data.
        </li>
      </ul>

      <hr />

      {/* Output Devices */}
      <h3>🔹 Output Devices</h3>
      <p>
        <b>Output Devices</b> display the results produced by the computer in a
        human-readable form.
      </p>

      <ul>
        <li>
          <b>Monitor:</b> Also called VDU. Displays text, images, and videos.
        </li>
        <li>
          <b>Printer:</b> Produces output on paper. Types include Laser, Inkjet,
          and Dot-Matrix.
        </li>
        <li>
          <b>Plotter:</b> Used to print large drawings like maps and blueprints.
        </li>
        <li>
          <b>Speakers:</b> Produce sound output.
        </li>
      </ul>

      <hr />

      {/* Storage Devices */}
      <h3>🔹 Storage Devices</h3>
      <p>
        <b>Storage Devices</b> store data permanently or temporarily. These are
        also called secondary storage devices.
      </p>

      <h4>1️⃣ CD (Compact Disc)</h4>
      <p>
        A CD is an optical storage device with a capacity of 600–700 MB.
      </p>
      <ul>
        <li><b>CD-ROM:</b> Read-only, data cannot be changed</li>
        <li><b>CD-R:</b> Write once, read many times</li>
        <li><b>CD-RW:</b> Rewritable many times</li>
      </ul>

      <h4>2️⃣ DVD (Digital Versatile Disc)</h4>
      <p>
        DVD has higher storage capacity than CD.
      </p>
      <ul>
        <li>DVD-ROM</li>
        <li>DVD-R / DVD+R</li>
        <li>DVD-RW / DVD+RW</li>
        <li>DVD-RAM</li>
      </ul>

      <h4>3️⃣ Hard Disk</h4>
      <p>
        A hard disk is a non-volatile storage device used to store large amounts
        of data.
      </p>
      <ul>
        <li><b>Internal Hard Disk</b></li>
        <li><b>Internal Cartridge</b></li>
        <li><b>Hard Disk Packs</b></li>
      </ul>

      <hr />

      {/* Internal Components */}
      <h3>🔹 Internal Hardware Components</h3>

      <h4>1️⃣ CPU (Central Processing Unit)</h4>
      <p>
        The CPU is known as the <b>brain of the computer</b>. It consists of:
      </p>
      <ul>
        <li>Control Unit (CU)</li>
        <li>Arithmetic Logic Unit (ALU)</li>
        <li>Memory Unit</li>
      </ul>

      <h4>2️⃣ Motherboard</h4>
      <p>
        The motherboard is the main circuit board that connects all hardware
        components.
      </p>

      <h4>3️⃣ RAM (Random Access Memory)</h4>
      <p>
        RAM is volatile memory that stores data temporarily.
      </p>
      <ul>
        <li><b>SRAM:</b> Fast, expensive, used as cache memory</li>
        <li><b>DRAM:</b> Slower, cheaper, used as main memory</li>
      </ul>

      <h4>4️⃣ VGA Port</h4>
      <p>
        VGA port connects the monitor to the computer system.
      </p>

      <h4>5️⃣ Power Supply</h4>
      <p>
        Supplies electrical power to all components of the computer.
      </p>

      <h4>6️⃣ Cooling Fan</h4>
      <p>
        Prevents overheating of computer components.
      </p>

      <h4>7️⃣ Hard Drive</h4>
      <p>
        Stores operating system, software, and user files permanently.
      </p>

      <hr />

      {/* Hardware vs Software */}
      <h3>🔹 Relationship Between Hardware and Software</h3>
      <p>
        Hardware and software are interdependent. Hardware cannot function
        without software and software cannot run without hardware.
      </p>

      <p className="note-text">
        ✅ Hardware = Physical parts <br />
        ✅ Software = Programs & instructions
      </p>
    </section>
  );
}
