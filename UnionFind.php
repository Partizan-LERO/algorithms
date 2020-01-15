<?php

class UnionFind {
    public $arr = [];
    public function __construct($n) {
        foreach (range(0, $n) as $number) {
            $this->arr[] = $number;
        }
    }
    
    private function root(int $i) :int {
        while ($i != $this->arr[$i]) {
            $this->arr[$i] = $this->arr[$this->arr[$i]];
            $i = $this->arr[$i];
        }
        
        return $i;
    }
    
    public function isConnected(int $p, int $q) :bool {
      return $this->root($p) == $this->root($q);
    }
    
    public function union(int $p, int $q) {
        $i = $this->root($p);
        $j = $this->root($q);
        $this->arr[$i] = $j;
    }
    
    public function dump() {
        var_dump($this->arr);
    }
}


$check = new UnionFind(10);
$check->union(1,3);
$check->union(2,6);

$check->union(1,2);

var_dump($check->isConnected(1,6)); // should be true
var_dump($check->isConnected(2,4)); // should be false

$check->dump();
