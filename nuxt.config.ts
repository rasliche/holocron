// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/supabase'],
    supabase: {
      url: 'https://jslqyxfrxdumppmyyoly.supabase.co',
      key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzbHF5eGZyeGR1bXBwbXl5b2x5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczMDM5MjMsImV4cCI6MjAxMjg3OTkyM30.S_9ajZbWNKHvnkropH_xLYRy0YDRicaesI8RuGlk2hw',
      cookieName: 'mssb',
      redirectOptions: {
        login: '/login',
        callback: '/confirm',
        exclude: ['/', '/prompts', '/about']
      }
    }
  })
  
