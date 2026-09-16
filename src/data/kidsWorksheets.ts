export type WorksheetKind = 'trace' | 'color' | 'dots' | 'symmetry' | 'pattern' | 'count' | 'craft';
export interface KidsWorksheet { id: string; title: string; category: string; age: string; kind: WorksheetKind; prompt: string; detail: string; motif: string; }

const CORE_KIDS_WORKSHEETS: KidsWorksheet[] = [
  { id: 'shapes', title: 'Trace the shapes', category: 'Drawing', age: 'Class 1–2', kind: 'trace', motif: 'shapes', prompt: 'Trace each dotted outline. Then draw one shape of your own.', detail: 'Try a circle, square, triangle and star.' },
  { id: 'curves', title: 'Wiggly water lines', category: 'Drawing', age: 'Class 1–2', kind: 'trace', motif: 'waves', prompt: 'Trace each wave from left to right. Draw two new waves below.', detail: 'A steady hand makes the ripples flow.' },
  { id: 'letters', title: 'My first letters', category: 'Letters', age: 'Class 1–2', kind: 'trace', motif: 'ABC', prompt: 'Trace A, B and C, then write each letter on the lines.', detail: 'Say the letter sound while you write.' },
  { id: 'numbers', title: 'Numbers 1, 2, 3', category: 'Numbers', age: 'Class 1–2', kind: 'trace', motif: '123', prompt: 'Trace the numbers. Draw as many dots as each number says.', detail: 'Count aloud: one, two, three.' },
  { id: 'fish', title: 'Color the ocean fish', category: 'Coloring', age: 'Class 1–3', kind: 'color', motif: 'fish', prompt: 'Color the fish. Give each fish a different pattern.', detail: 'Try spots, stripes and zigzags.' },
  { id: 'butterflies', title: 'Butterfly garden', category: 'Coloring', age: 'Class 1–3', kind: 'color', motif: 'butterfly', prompt: 'Color both butterflies. Make their wings match.', detail: 'How many wing spots can you find?' },
  { id: 'rockets', title: 'Space explorer', category: 'Coloring', age: 'Class 2–5', kind: 'color', motif: 'rocket', prompt: 'Design a rocket. Add a planet and stars.', detail: 'Give your spaceship a name.' },
  { id: 'flowers', title: 'Spring flowers', category: 'Coloring', age: 'Class 1–3', kind: 'color', motif: 'flower', prompt: 'Color the flowers. Add insects in the empty space.', detail: 'Try making your own petal pattern.' },
  { id: 'sailboat', title: 'Connect the sailboat', category: 'Dots', age: 'Class 1–3', kind: 'dots', motif: 'boat', prompt: 'Connect the numbered dots in order. Color your finished boat.', detail: 'Start at 1 and end at 11.' },
  { id: 'star-dots', title: 'Connect the star', category: 'Dots', age: 'Class 1–3', kind: 'dots', motif: 'star', prompt: 'Connect the numbered dots. Decorate the night sky.', detail: 'What comes after 10?' },
  { id: 'house-dots', title: 'Build a dot house', category: 'Dots', age: 'Class 2–4', kind: 'dots', motif: 'house', prompt: 'Join the dots, then draw a door and two windows.', detail: 'Make your house a happy color.' },
  { id: 'mirror-butterfly', title: 'Finish the butterfly', category: 'Symmetry', age: 'Class 2–5', kind: 'symmetry', motif: 'butterfly', prompt: 'Use the dotted middle line as a mirror. Draw the missing wing.', detail: 'Match the top and bottom curves.' },
  { id: 'mirror-rocket', title: 'Finish the rocket', category: 'Symmetry', age: 'Class 2–5', kind: 'symmetry', motif: 'rocket', prompt: 'Copy the left half onto the right. Add a window.', detail: 'Both sides should be the same width.' },
  { id: 'patterns', title: 'What comes next?', category: 'Patterns', age: 'Class 1–3', kind: 'pattern', motif: 'shapes', prompt: 'Finish each repeating pattern in the empty boxes.', detail: 'Look for AB, AAB and ABC patterns.' },
  { id: 'count-petals', title: 'Count the petals', category: 'Numbers', age: 'Class 1–2', kind: 'count', motif: 'flowers', prompt: 'Count the flowers in each row. Write the number in the box.', detail: 'Touch each flower while counting.' },
  { id: 'paper-boat', title: 'Make a paper boat', category: 'Craft', age: 'Class 2–5', kind: 'craft', motif: 'boat', prompt: 'Color, cut and fold the pieces into a little sailboat.', detail: 'Fold on the dashed line and glue the sail onto the hull. Ask an adult for scissors.' },
  { id: 'crown', title: 'Make a paper crown', category: 'Craft', age: 'Class 2–5', kind: 'craft', motif: 'crown', prompt: 'Color the crown, cut the outline and attach a paper strip.', detail: 'Decorate the crown before cutting. Ask an adult for scissors.' },
  { id: 'flower-craft', title: 'Build a flower', category: 'Craft', age: 'Class 1–4', kind: 'craft', motif: 'flower', prompt: 'Color and cut out the flower, stem and leaves. Glue them together.', detail: 'Use scrap paper for extra petals. Ask an adult for scissors.' },
];


const CLASS_ACTIVITY_SETS = [
  { category: 'Drawing', kind: 'trace' as const, motif: 'shapes', title: 'Shape tracing', skill: 'Trace the dotted shapes, then draw the final shape by yourself.', tip: 'Move your pencil slowly and stay close to each dotted line.' },
  { category: 'Letters', kind: 'trace' as const, motif: 'ABC', title: 'Letter practice', skill: 'Trace the capital letters, say each sound, and copy them on the writing lines.', tip: 'Start every letter at the top unless your teacher says otherwise.' },
  { category: 'Numbers', kind: 'count' as const, motif: 'flowers', title: 'Count and write', skill: 'Count each group carefully and write the correct number in its box.', tip: 'Point to every object once while counting.' },
  { category: 'Coloring', kind: 'color' as const, motif: 'fish', title: 'Creative coloring', skill: 'Color the picture neatly and add a repeating pattern of your own.', tip: 'Choose three colors that look good together.' },
  { category: 'Dots', kind: 'dots' as const, motif: 'star', title: 'Number dot trail', skill: 'Join the numbered dots in order, then complete and color the scene.', tip: 'Check the next number before drawing each line.' },
  { category: 'Craft', kind: 'craft' as const, motif: 'flower', title: 'Cut-and-build craft', skill: 'Color the pieces, cut around the outlines, and glue them into a picture.', tip: 'Ask an adult before using scissors or glue.' },
] as const;

const CLASS_VARIATIONS = [
  { label: 'Starter', extra: 'Circle the part you enjoyed most.' },
  { label: 'Practice', extra: 'Complete the activity twice using different colors or examples.' },
  { label: 'Challenge', extra: 'Add three original details after completing the main task.' },
] as const;

const GENERATED_CLASS_WORKSHEETS: KidsWorksheet[] = Array.from({ length: 5 }, (_, classIndex) => classIndex + 1)
  .flatMap(classLevel => CLASS_ACTIVITY_SETS.flatMap((activity, activityIndex) =>
    CLASS_VARIATIONS.map((variation, variationIndex) => ({
      id: `class-${classLevel}-${activity.kind}-${activityIndex + 1}-${variationIndex + 1}`,
      title: `Class ${classLevel} ${activity.title} · ${variation.label}`,
      category: activity.category,
      age: `Class ${classLevel}`,
      kind: activity.kind,
      motif: activity.motif,
      prompt: `${activity.skill} ${variation.extra}`,
      detail: `${activity.tip} Level: ${variation.label.toLowerCase()}.`,
    }))
  ));

export const KIDS_WORKSHEETS: KidsWorksheet[] = [...CORE_KIDS_WORKSHEETS, ...GENERATED_CLASS_WORKSHEETS];
