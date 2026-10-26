<#
.SYNOPSIS
    Script de automação para versionamento, commit, tag e push para o GitHub.
.DESCRIPTION
    Este script facilita a atribuição de novas versões do Salve o Corinthians.
    Ele verifica o status do Git, valida se o CHANGELOG foi atualizado,
    cria o commit com Conventional Commits, gera a Git Tag correspondente
    e envia (push) para o repositório remoto no GitHub.
.EXAMPLE
    .\version.ps1 -Version "1.1.0" -Message "Adiciona feed da Neo Química Arena"
#>

param (
    [Parameter(Mandatory=$true)]
    [string]$Version,

    [Parameter(Mandatory=$true)]
    [string]$Message,

    [ValidateSet("feat", "fix", "docs", "style", "refactor", "perf", "chore")]
    [string]$Type = "feat"
)

$Tag = "v$Version"
$CommitMsg = "$($Type): $($Tag) - $($Message)"

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "  🦅 Salve o Corinthians - Versionamento  " -ForegroundColor White
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "Versão : $Tag" -ForegroundColor Yellow
Write-Host "Commit : $CommitMsg" -ForegroundColor Gray

# 1. Adicionar arquivos
Write-Host "`n[1/4] Adicionando arquivos ao stage..." -ForegroundColor Cyan
git add .

# 2. Realizar Commit
Write-Host "[2/4] Criando commit..." -ForegroundColor Cyan
git commit -m $CommitMsg

# 3. Criar Tag
Write-Host "[3/4] Criando tag $Tag..." -ForegroundColor Cyan
git tag -a $Tag -m "Release $Tag: $Message"

# 4. Push para o GitHub
Write-Host "[4/4] Enviando branch main e tags para o GitHub..." -ForegroundColor Cyan
git push origin main --tags

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✔ Versão $Tag publicada com sucesso no GitHub!" -ForegroundColor Green
} else {
    Write-Host "`n⚠ O push falhou. Verifique se o repositório remoto existe no GitHub e se você possui permissão." -ForegroundColor Yellow
}
