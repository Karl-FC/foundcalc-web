class MatFoundationState {
  // scrollbar
  bool scrollToTop = false;
  // dropdowns

  // String? calculation;
  
  // inputs
  String inputCu = '';
  String inputB = '';
  String inputL = '';
  String inputDf = '';
  String inputTheta = '';
  
  String inputQ = '';
  String inputGamma = '';

  String inputN60 = '';
  String inputSe = '';
    // final answer
    double? fs;
    double? qnetu;
    double? qneta;

  // int
  int? solvedCalc;

  // toggles
  bool showResults = false;
  bool showSolution = false;
  bool solutionToggle = true;

  final String title;
  MatFoundationState({required this.title});
}