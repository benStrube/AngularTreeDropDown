import { NestedTreeControl } from '@angular/cdk/tree';
import { Component} from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Database 1',
    children: [
      { name: 'Table 1 [WHERE]',
        children: [
          {name: 'Column 1',
          children: [
            {name: 'data'},
            {name: 'data'},
            {name: 'data'}
          ]},
          {name: 'Column 2',
            children: [
              {name: 'data'},
              {name: 'data'},
              {name: 'data'}
            ]}
        ] },
      { name: 'Table 2',
      children: [
        {name: 'Column 1',
        children: [
          {name: 'data'},
          {name: 'data'},
          {name: 'data'}
        ]},
        {name: 'Column 2',
          children: [
            {name: 'data'},
            {name: 'data'},
            {name: 'data'}
          ]}
      ] },
      { name: 'Table 3',
      children: [
        {name: 'Column 1',
        children: [
          {name: 'data'},
          {name: 'data'},
          {name: 'data'}
        ]},
        {name: 'Column 2',
          children: [
            {name: 'data'},
            {name: 'data'},
            {name: 'data'}
          ]}
      ] },
    ]
  }, 
  {
    name: 'Database 2',
    children: [
      { name: 'Table 1',
        children: [
          {name: 'Column 1',
          children: [
            {name: 'data'},
            {name: 'data'},
            {name: 'data'}
          ]},
          {name: 'Column 2',
            children: [
              {name: 'data'},
              {name: 'data'},
              {name: 'data'}
            ]}
        ] },
      { name: 'Table 2',
      children: [
        {name: 'Column 1',
        children: [
          {name: 'data'},
          {name: 'data'},
          {name: 'data'}
        ]},
        {name: 'Column 2',
          children: [
            {name: 'data'},
            {name: 'data'},
            {name: 'data'}
          ]}
      ] },
      { name: 'Table 3',
      children: [
        {name: 'Column 1',
        children: [
          {name: 'data'},
          {name: 'data'},
          {name: 'data'}
        ]},
        {name: 'Column 2',
          children: [
            {name: 'data'},
            {name: 'data'},
            {name: 'data'}
          ]}
      ] },
    ]
  },
  {
    name: 'Database 3',
    children: [
      { name: 'Table 1',
        children: [
          {name: 'Column 1',
          children: [
            {name: 'data'},
            {name: 'data'},
            {name: 'data'}
          ]},
          {name: 'Column 2',
            children: [
              {name: 'data'},
              {name: 'data'},
              {name: 'data'}
            ]}
        ] },
      { name: 'Table 2',
      children: [
        {name: 'Column 1',
        children: [
          {name: 'data'},
          {name: 'data'},
          {name: 'data'}
        ]},
        {name: 'Column 2',
          children: [
            {name: 'data'},
            {name: 'data'},
            {name: 'data'}
          ]}
      ] },
      { name: 'Table 3',
      children: [
        {name: 'Column 1',
        children: [
          {name: 'data'},
          {name: 'data'},
          {name: 'data'}
        ]},
        {name: 'Column 2',
          children: [
            {name: 'data'},
            {name: 'data'},
            {name: 'data'}
          ]}
      ] },
    ]
  },
  {
    name: 'Database 4',
    children: [
      { name: 'Table 1',
        children: [
          {name: 'Column 1',
          children: [
            {name: 'data'},
            {name: 'data'},
            {name: 'data'}
          ]},
          {name: 'Column 2',
            children: [
              {name: 'data'},
              {name: 'data'},
              {name: 'data'}
            ]}
        ] },
      { name: 'Table 2',
      children: [
        {name: 'Column 1',
        children: [
          {name: 'data'},
          {name: 'data'},
          {name: 'data'}
        ]},
        {name: 'Column 2',
          children: [
            {name: 'data'},
            {name: 'data'},
            {name: 'data'}
          ]}
      ] },
      { name: 'Table 3',
      children: [
        {name: 'Column 1',
        children: [
          {name: 'data'},
          {name: 'data'},
          {name: 'data'}
        ]},
        {name: 'Column 2',
          children: [
            {name: 'data'},
            {name: 'data'},
            {name: 'data'}
          ]}
      ] },
    ]
  },
  {
    name: 'Database 6',
    children: [
      { name: 'Table 1',
        children: [
          {name: 'Column 1',
          children: [
            {name: 'data'},
            {name: 'data'},
            {name: 'data'}
          ]},
          {name: 'Column 2',
            children: [
              {name: 'data'},
              {name: 'data'},
              {name: 'data'}
            ]}
        ] },
      { name: 'Table 2',
      children: [
        {name: 'Column 1',
        children: [
          {name: 'data'},
          {name: 'data'},
          {name: 'data'}
        ]},
        {name: 'Column 2',
          children: [
            {name: 'data'},
            {name: 'data'},
            {name: 'data'}
          ]}
      ] },
      { name: 'Table 3',
      children: [
        {name: 'Column 1',
        children: [
          {name: 'data'},
          {name: 'data'},
          {name: 'data'}
        ]},
        {name: 'Column 2',
          children: [
            {name: 'data'},
            {name: 'data'},
            {name: 'data'}
          ]}
      ] },
    ]
  },
  {
    name: 'Database 7',
    children: [
      { name: 'Table 1',
        children: [
          {name: 'Column 1',
          children: [
            {name: 'data'},
            {name: 'data'},
            {name: 'data'}
          ]},
          {name: 'Column 2',
            children: [
              {name: 'data'},
              {name: 'data'},
              {name: 'data'}
            ]}
        ] },
      { name: 'Table 2',
      children: [
        {name: 'Column 1',
        children: [
          {name: 'data'},
          {name: 'data'},
          {name: 'data'}
        ]},
        {name: 'Column 2',
          children: [
            {name: 'data'},
            {name: 'data'},
            {name: 'data'}
          ]}
      ] },
      { name: 'Table 3',
      children: [
        {name: 'Column 1',
        children: [
          {name: 'data'},
          {name: 'data'},
          {name: 'data'}
        ]},
        {name: 'Column 2',
          children: [
            {name: 'data'},
            {name: 'data'},
            {name: 'data'}
          ]}
      ] },
    ]
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Tree-Example'

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
    
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}

