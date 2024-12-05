'use client'
import { useState } from 'react'

import {DndContext} from '@dnd-kit/core';
import {Draggable} from '@/app/components/Draggable';
import {Droppable} from '@/app/components/Droppable';

// export default function Page() {
//   return (
//     <DndContext suppressHydrationWarning>
//       <Draggable />
//       {/* <Droppable /> */}
//     </DndContext>
//   )
// }

export default function Page() {
    const [isDropped, setIsDropped] = useState(false);
    const draggableMarkup = (
      <Draggable>Drag me</Draggable>
    );
    
    return (
      <DndContext onDragEnd={handleDragEnd} suppressHydrationWarning>
        {!isDropped ? draggableMarkup : null}
        <Droppable>
          {isDropped ? draggableMarkup : 'Drop here'}
        </Droppable>
      </DndContext>
    );
    
    function handleDragEnd(event) {
      if (event.over && event.over.id === 'droppable') {
        setIsDropped(true);
      }
    }
  }