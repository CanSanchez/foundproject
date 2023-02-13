import { test, devices, expect } from '@playwright/test';

test.use({ 
    ...devices['iPhone XR'],
    viewport: { width: 414, height: 896 },
});