// src/supabase.js
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://vazegyjgkwogdrvgbljc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhemVneWpna3dvZ2RydmdibGpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0NDUyOTgsImV4cCI6MjA3ODAyMTI5OH0.7g3c1RnxOm6la2KL1Ljrie2ieBNywxWsO93YHCkck_Y';
export const supabase = createClient(supabaseUrl, supabaseKey);