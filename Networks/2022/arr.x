struct intarr {
  int arr[100];
  int n;
};


program SUM_PROG {
  version SUM_VERS {
    int ADD(intarr) = 1;
  } = 1;
} = 0x23456789;
