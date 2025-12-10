type Tutorial = {
  f: string // formula
  d: string // description
  c: string[] // colors
  a: string[] // arrow
}

type F2L = {
  f: string // formula
  c: string[] // colors
}

type OLL = {
  i: number // id
  f: string // formula
  c: string[] // colors
  t: string // tag
}

enum Finger {
  L1 = 'L1', // left index
  R0 = 'R0', // right thumb
  RING = 'RING', // right ring finger
}
enum Face {
  R = 'R',
  L = 'L',
  U = 'U',
  D = 'D',
  F = 'F',
  B = 'B',
  r = 'r',
  l = 'l',
  u = 'u',
  d = 'd',
  f = 'f',
  b = 'b',
  M = 'M',
  E = 'E',
  S = 'S',
  X = 'X',
  Y = 'Y',
  Z = 'Z',
  m = 'm',
  e = 'e',
  s = 's',
  x = 'x',
  y = 'y',
  z = 'z',
}
type Step = {
  f: Face
  i: boolean // inverse
  d?: boolean // double
  fi?: Finger
}
type GroupNode = {
  r?: number // repeat
  n: FormulaNode[] // nodes
}
type FormulaNode = Step | GroupNode
type Formula = FormulaNode[]

// const f1: Formula = [
//   { f: 'F', fi: 'R0' },
//   { f: 'U', fi: 'L1' },
//   {
//     r: 2,
//     n: [
//       { f: 'R', fi: 'RING' },
//       { f: 'U', i: true, fi: 'L1' },
//       { f: 'R', i: true, fi: 'RING' },
//       { f: 'F', i: true, fi: 'R0' },
//     ],
//   },
//   {
//     n: [
//       { f: 'R', fi: 'RING' },
//       { f: 'U', i: true, fi: 'L1' },
//       { f: 'R', i: true, fi: 'RING' },
//     ],
//   },
// ]
