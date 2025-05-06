# **Welcome to FoundCalc! Block B's Footing Calculator**

**FoundCalc** is a specialized software application developed by BSCE 4-B, designed to simplify and streamline the complex calculations involved in foundation and retaining wall engineering. Recognizing the increasing demand for efficiency and accuracy in modern civil engineering, FoundCalc serves as a practical tool for both students learning the principles of foundation design and engineers seeking a reliable aid for their calculations.The primary goal of FoundCalc is to assist users in performing a wide range of analyses and designs, from various types of shallow and deep foundations (such as isolated footings, combined footings, mat foundations, and piles) to retaining wall structures. By leveraging the capabilities of the Dart programming language and the Flutter framework, FoundCalc offers a user-friendly interface that allows users to input their project-specific data and quickly obtain detailed results. This helps in optimizing foundation designs, saving valuable time, and providing a handy resource for verifying manual computations.FoundCalc is available as a standalone application for Android and Windows, as well as a dedicated webapp version available for all platforms.
<br>
<br>
<br>

# Features and Capabilities

## I. Capabilities
**Shallow Foundations:**  
  * Footing Analysis (Stability, Bearing Capacity, Settlement)  
  * Footing Design (Dimensions, Reinforcement)  
  * Rectangular Footing with Moment (Analysis & Design)  
  * Combined Footing Calculations  
  * Mat (Raft) Foundation Calculations

**Deep Foundations:**  
  * Analysis & Design (e.g., Piles)  

**Retaining Structures:**  
  * Retaining Wall Analysis & Design (Stability, Dimensions, Reinforcement)

## **II. Features**

* **Tab-Based Workflow (Multiple simultaneous calculations)**  
  * Work on multiple calculations simultaneously, each in its own dedicated tab. (Parang sa chrome)  
  * Easily add new tabs for any of the available calculation modules.  
  * Close tabs you no longer need with a simple click.  
  * Persistent State per Tab (Inputs/results saved while tab is open)  
* **Dynamic Tab Management (Add/Close specific calculation tabs)**  
* **Navigation Drawer (Overview & quick access to open tabs)**
  * Sobrang daming tabs? may menu sa right na naglilist ng lahat ng open tabs for easy access at removal  
* Simple and Minimalist Home Screen  
* Dark Theme  
* "Scroll to Top" Button on calculation pages  
* A dedicated “Solutions” menu that shows the process and how each variable is calculated after the calculation is called  
* Convenient Text Input  
  * Madali ma erase (press lang yun ‘X’)

## **IV. Application Information & Platform:**
* Online and Offline Support  
* Cross-Platform  
  * Standalone offline application for Android and Windows  
  * Dedicated Web Application available for all devices (Android, iOS, Desktop)

## **Technical Information**
1. **Core Development Technologies:**  
   * **Programming Language:** FoundCalc is developed using Dart, a modern, object-oriented programming language optimized for building fast applications on any platform.  
   * **Framework:** The application is built with Flutter, an open-source UI software development kit created by Google. Flutter allows for the creation of natively compiled applications for mobile, web, and desktop from a single codebase, ensuring a consistent user experience.  
2. **Platform Support:**  
   FoundCalc is available for all platforms; A dedicated standalone app for both Windows and Android, as well as an online web application for other operating systems.  
   * **Offline Version:** For Android and Windows, a standalone offline version has been developed. All calculations and data processing are performed locally on the user's device. FoundCalc does not require an internet connection for its core functionalities once installed.  
   * **Online Version:** More portable but with the same functionalities. As long as internet access is available, Apple iOS and Mac users can use FoundCalc too.  
3. **Data Management:**  
   * Session-Based Data: User inputs and calculated results are managed within the active session of each specific tab. This data persists as long as the tab remains open.  
   * Local Processing: Data is processed and stored temporarily on the device during use. It doesn't rely on external databases or cloud storage for its primary calculations. Therefore, it is safe for use with no issues on privacy.



# **How it Works**

### 1. **Installation**

**For Windows**

1. Download "Block B Program.zip"  
2. Extract the zip file  
3. Navigate to "FoundCalc Desktop Application" folder  
4. Run FoundCalc.exe  
   * If a dialogue box opens saying "Microsoft Defender SmartScreen prevented an unrecognized app from starting. ", Just click "More Info", then "Run Anyway"

**For Android**

1. Download "FoundCalc.apk"  
2. Press the downloaded app then install  
      * If the Android System prompts that the package cannot be installed due to Permission issues or 'Unknown Sources', navigate first to your settings and allow your File Manager or Browser to install from Unknown Sources (May vary with device)

**For Web Browsers (Online version)**
1. Open your web browser (any web browser)  
2. Go to https://foundcalc.vercel.app

   
<br>

### 2. **Launch the app**  
   * When you open the app, you'll see a Home Screen. This screen lists all the different types of foundation calculations you can do (like "Footing Design," "Mat Foundation," "Retaining Wall," etc.).
  
### 3. **Choose your calculator**  
   * Once you select a calculation type, the app opens a new, clean workspace for it in a Tab. This is like opening a new document for a specific project.  
   * You can open multiple tabs if you're working on different problems or want to compare different scenarios for the same problem. Each tab keeps its work separate.  

### 4. **Input all necessary inputs**  
   * Inside each tab, you'll find clearly labeled fields where you enter the known information for your specific problem. This could be things like: Soil properties, Loads, Material properties, and Dimensions (if you're analyzing an existing design)  
   
### 5. **Press Calculate**  
   * After you've entered your data, the calculator automatically performs the complex calculations required for that specific foundation type.  
   * Aftwerhich, the app displays the calculated results within the same tab. The results are typically presented in an organized way, making them easy to understand and use for your reports or designs.

<br>

# **Benefits and Application**  
FoundCalc is a programmed application primarily created to assist in calculating related problem-solving scenarios in foundation engineering. Specifically, it has the following benefits:

* FoundCalc aids engineers in analyzing and designing different footing shapes, combined footings,  mat foundations, deep foundations, and retaining walls automatically.  
* FoundCalc is an efficient and effective application that saves users’ time in analyzing and designing foundations and retaining walls.  
* FoundCalc has a user-friendly interface that makes it easier for people to toggle.  
* FoundCalc offers direct analysis and design where users are only required to fill-in their gathered data to acquire their desired result.  
* FoundCalc can be utilized as a secondary checking tool to verify the accuracy of users’ manually computed analysis and design of foundations and retaining walls.

# **Limitations and Future Improvements**
1. **Standalone Applications for Other Operating Systems**  
   * Currently, the standalone offline program only supports Windows and Android devices. Apple iOS, Mac, and Linux coming soon.  
2. **Customization and Themes**  
   * Allow users to customize the app’s interface (eg. color, font, font size)  
3. **Use of Different Units**  
   * Currently, the program mainly uses the metric system in its calculations. Further development would allow users to change between metric and imperial units.
