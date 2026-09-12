import React from 'react';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { KIDS_WORKSHEETS } from '../data/kidsWorksheets';
import { KidsWorksheetPage } from './KidsWorksheetPage';

test('each printable activity has unique identity, instructions and artwork', () => {
  assert.equal(new Set(KIDS_WORKSHEETS.map(w => w.id)).size, KIDS_WORKSHEETS.length);
  assert.ok(KIDS_WORKSHEETS.length >= 15);
  for (const worksheet of KIDS_WORKSHEETS) {
    const html = renderToStaticMarkup(<KidsWorksheetPage worksheet={worksheet} />);
    assert.ok(html.includes(worksheet.title), worksheet.id);
    assert.ok(html.includes(worksheet.prompt), worksheet.id);
    assert.ok(html.includes('<svg'), worksheet.id);
    assert.ok(/<path|<circle|<rect|<ellipse|<text/.test(html), worksheet.id);
  }
});
