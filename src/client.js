import { createClient } from '@supabase/supabase-js';

const URL = 'https://xjfsgiunlarcqvywyuhk.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqZnNnaXVubGFyY3F2eXd5dWhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA5OTAyNTcsImV4cCI6MTk5NjU2NjI1N30.wS9Ch4BZy_czsYF5HZeSArp3G474WMtgBckvgsSQrw4';

export const supabase = createClient(URL, API_KEY);