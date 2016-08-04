exports default function at(o, k) {
  var p=(''+k).split('.'), i=-1
  while(++i<p.length && o!=null) o=o[p[i]]
  return o
}
