'use client'

import { useTranslation } from '@/providers/i18n-provider'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Languages } from 'lucide-react'
import { languages } from '@/providers/i18n-options'
import { useCookies } from 'react-cookie'

export default function LanguageToggle() {
  const { i18n } = useTranslation()
  const [cookies, setCookie, removeCookie] = useCookies(['i18next'])
  
  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    setCookie('i18next', lang, { path: '/' })

  }

  const languageMap: Record<string, { label: string, flag: string }> = {
    en: { label: 'English', flag: '🇬🇧' },
    fr: { label: 'Français', flag: '🇫🇷' },
    tr: { label: 'Türkçe', flag: '🇹🇷' }
  }

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            >
                <Languages className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                <span className="sr-only">Toggle language</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
            align="end" 
            className="min-w-[150px] p-2 bg-white dark:bg-background rounded-lg shadow-lg border border-slate-200"
        >
            {languages.map((lang) => (
                <DropdownMenuItem 
                    key={lang}
                    onClick={() => toggleLanguage(lang)}
                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                >
                    <span className="text-lg">{languageMap[lang].flag}</span>
                    {languageMap[lang].label}
                </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
    </DropdownMenu>
  )
}