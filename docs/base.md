---
id: base
title: Базовые фигуры в SVG
---

import SVGEmbed from '../src/components/svgembed.js'

## Прямоугольник

Строится с помощью тега `rect`. Тег имеет атрибуты `x` и `y`, которые указывают расстояние в пикселях от левого верхнего угла `svg` элемента. Так же задаем высоту `height` и ширину `width` прямоугольника. Для оформления используем класс `svg-rect`.

```css
.svg-rect {
  fill: #6d2885;
  stroke: #286f85;
  stroke-width: 5;
  fill-opacity: 0.7;
  stroke-opacity: 0.8;
}
```

Где свойство `fill` это цвет заливки прямоугольника, `stroke` цвет обводки, а `stroke-width` это толщина обводки в пикселях. И наконец, `fill-opacity` и `stroke-opacity` прозрачность заливки и обводки соответственно.

<SVGEmbed svg='<svg width="500" height="200"> <style> .svg-rect { fill: #6d2885; stroke: #286f85; stroke-width: 5; fill-opacity: 0.7; stroke-opacity: 0.8; } </style> <rect x="50" y="20" width="150" height="150" class="svg-rect" /> <rect x="250" y="20" rx="40" ry="40" width="150" height="150" class="svg-rect" style = "fill-opacity: 1; stroke-opacity: 1;"/> </svg>'/>

```xml
<svg width="500" height="200">
      <rect x="50" y="20"  width="150" height="150" class="svg-rect" />
      <rect x="250" y="20" rx="40" ry="40" width="150" height="150" class="svg-rect" style = "fill-opacity: 1; stroke-opacity: 1;"/>
</svg>
```

Для второго прямоугольника мы указываем дополнительные `inline` стили, которые перекрывают правила из таблицы стилей. Так же используем два новых атрибута `rx` и `ry`, которые указывают радиусы округления углов прямоугольника.

## Окружность

Здесь `cx` и `cy` это координаты центра окружности, относительно левого верхнего угла `svg` элемента. Радиус окружности указываем через атрибут `r`.

<SVGEmbed svg='<svg height="200" width="200"> <circle cx="100" cy="100" r="50" style="stroke: #286D85; stroke-width: 3; fill: #3F8528;"/> </svg>'/>

```xml
<svg height="200" width="200">
  <circle cx="100" cy="100" r="50" style="stroke: #286D85; stroke-width: 3; fill: #3F8528;"/>
</svg>
```

## Эллипс

В эллипсе, из-за эксцентриситета, два атрибута радиуса для каждой из осей координат соответственно `rx` и `ry`.

<SVGEmbed svg='<svg height="200" width="300">
  <ellipse cx="150" cy="100" rx="100" ry="50" style="stroke: #286D85; stroke-width: 3; fill: #3F8528;"/>
</svg>'/>

```xml
<svg height="200" width="300">
  <ellipse cx="150" cy="100" rx="100" ry="50" style="stroke: #286D85; stroke-width: 3; fill: #3F8528;"/>
</svg>
```

## Линия

У линий задается начальная точка `x1="10"` `y1="10"` и конечная точка `x2="200"` `y2="200"` построения. У линий нет свойств заливки, и оформляются они свойствами обводки. Про обводку мы более подробно поговорим в следующей главе.

<SVGEmbed svg='<svg height="210" width="500">
  <line x1="10" y1="10" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
  <line x1="30" y1="30" x2="400" y2="100" style="stroke:rgb(0,255,0);stroke-width:2" />
  <line x1="130" y1="130" x2="300" y2="20" style="stroke:rgb(0,0,255);stroke-width:2" />
</svg>'/>

```xml
<svg height="210" width="500">
  <line x1="10" y1="10" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
  <line x1="30" y1="30" x2="400" y2="100" style="stroke:rgb(0,255,0);stroke-width:2" />
  <line x1="130" y1="130" x2="300" y2="20" style="stroke:rgb(0,0,255);stroke-width:2" />
</svg>
```

## Полилиния

Координаты полилинии задаются в атрибуте `points`, они разделены пробелами, а значения самой точки по осям запятыми. Все точки соединяются между собой последовательно от первой `290,40` до последней `190,190`.

<SVGEmbed svg='<svg height="200" width="300">
  <polyline points="290,40 40,40 40,80 80,80 80,120 120,120 190,190" fill="white" stroke="#853F28" stroke-width="6" />
</svg>'/>

```xml
<svg height="200" width="300">
  <polyline points="290,40 40,40 40,80 80,80 80,120 120,120 190,190" fill="white" stroke="#853F28" stroke-width="6" />
</svg>
```

## Полигон

Построение полигона происходит по тем же правилам, что и полилинии, но последняя координата всегда соединяется с первой, и внутренняя область закрашивается согласно значению свойства `fill`.

<SVGEmbed svg='<svg height="210" width="500">
  <polygon points="300,10 350,140 60,200 100,100" style="fill:#408528;stroke:#286E85;stroke-width:3" />
</svg>'/>

```xml
<svg height="210" width="500">
  <polygon points="300,10 350,140 60,200 100,100" style="fill:#408528;stroke:#286E85;stroke-width:3" />
</svg>
```

## Текст

Координаты `x` и `y` указывают в нашем случае нижнюю левую точку буквы `S`.

<svg width="500" height="200">
     <text x="20" y="120" fill="#ED6E46" font-size="100" font-family="'Arial', cursive">SVG book</text>
</svg>

```xml
<svg width="500" height="200">
     <text x="20" y="120" fill="#ED6E46" font-size="100" font-family="'Arial', cursive">SVG book</text>
</svg>
```
