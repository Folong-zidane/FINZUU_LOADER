'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('admin@finzuu.com')
  const [password, setPassword] = useState('demopassword')
  const [remember, setRemember] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Backend non actif : authentification simulée (mock), on redirige simplement.
    setLoading(true)
    setTimeout(() => router.push('/configuration'), 450)
  }

  return (
    <main className="flex min-h-svh items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center text-center">
          <span className="mb-6 inline-flex size-20 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-border">
            <Image
              src="/finzuu-icon.jpeg"
              alt="FinZuu Loader"
              width={80}
              height={80}
              className="size-20 object-contain"
              priority
            />
          </span>
          <h1 className="text-pretty text-2xl font-bold text-foreground">
            Bienvenue sur FinZuu Loader
          </h1>
          <p className="mt-2 text-balance text-sm leading-relaxed text-muted-foreground">
            Connectez-vous pour accéder à l&apos;outil de génération de données TEST/DEMO.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7"
        >
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none transition focus:border-ring focus:ring-3 focus:ring-ring/20"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="password" className="text-sm font-medium text-foreground">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11 w-full rounded-lg border border-input bg-background px-3 pr-11 text-sm text-foreground outline-none transition focus:border-ring focus:ring-3 focus:ring-ring/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                </button>
              </div>
            </div>

            <label className="flex cursor-pointer select-none items-center gap-2 text-sm text-muted-foreground">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="size-4 rounded border-input text-primary accent-primary"
              />
              Se souvenir de moi
            </label>

            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="h-11 w-full text-sm font-semibold"
            >
              {loading ? 'Connexion…' : 'Se connecter'}
            </Button>

            <div className="text-center">
              <a href="#" className="text-sm font-medium text-primary hover:underline">
                Mot de passe oublié ?
              </a>
            </div>
          </div>
        </form>

        <p className="mt-6 text-center text-xs text-muted-foreground">v1.2.0</p>
      </div>
    </main>
  )
}
