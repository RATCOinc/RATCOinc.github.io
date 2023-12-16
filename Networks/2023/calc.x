struct intpair {
  int a;
  int b;
};

program CALC_PROG {
  version CALC_VERS {
    int ADD(intpair) = 1;
    int SUB(intpair) = 2;
  } = 1;
} = 0x23456789;