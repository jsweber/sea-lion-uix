# 先清理已经写入的错误内容（去掉 u{...} 结尾段落），再重新写入正确的中文
$urlMap = Get-Content "$PSScriptRoot\radix-urls.json" -Raw | ConvertFrom-Json
$updated = 0

foreach ($prop in $urlMap.PSObject.Properties) {
    $comp = $prop.Name
    $url  = $prop.Value
    $compDir = "e:\work\sea-lion-uix\packages\react\$comp"

    # 处理中文 readme
    $cnFile = Join-Path $compDir "readme.md"
    if (Test-Path $cnFile) {
        $content = [System.IO.File]::ReadAllText($cnFile, [System.Text.Encoding]::UTF8)
        # 先移除之前错误写入的 u{...} 段落（如果存在）
        $content = $content -replace "\r?\n## u\{67E5\}u\{770B\}[\s\S]*$", ""
        # 移除可能存在的正确中文版本（避免重复）
        $content = $content -replace "\r?\n## 查看更多[\s\S]*$", ""
        $content = $content.TrimEnd()
        $cnSection = "`n`n## 查看更多`n`n参考 [Radix UI 官方文档]($url) 获取完整 API 与设计规范。`n"
        [System.IO.File]::WriteAllText($cnFile, $content + $cnSection, [System.Text.Encoding]::UTF8)
        $updated++
    }

    # 处理英文 readme
    $enFile = Join-Path $compDir "readme.en-US.md"
    if (Test-Path $enFile) {
        $content = [System.IO.File]::ReadAllText($enFile, [System.Text.Encoding]::UTF8)
        $content = $content -replace "\r?\n## Learn More[\s\S]*$", ""
        $content = $content.TrimEnd()
        $enSection = "`n`n## Learn More`n`nSee the [Radix UI documentation]($url) for the full API reference and design guidelines.`n"
        [System.IO.File]::WriteAllText($enFile, $content + $enSection, [System.Text.Encoding]::UTF8)
        $updated++
    }
}

Write-Host "Done. Updated $updated files."
