<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <title>Nouveau message — {{ $name }}</title>
</head>

<body
    style="margin:0; padding:0; background-color:#eef0ee; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#eef0ee">
        <tr>
            <td align="center" style="padding:40px 16px;">
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"
                    style="max-width:600px; width:100%; background-color:#ffffff; border-radius:16px; border:1px solid #e3e6e3;">

                    {{-- Header : monogramme + wordmark --}}
                    <tr>
                        <td style="padding:28px 32px 20px;">
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td width="36" height="36" bgcolor="#1fb890"
                                        style="width:36px; height:36px; border-radius:6px; text-align:center; vertical-align:middle; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; font-size:14px; font-weight:700; color:#06110d; letter-spacing:-0.02em;">
                                        FK
                                    </td>
                                    <td style="padding-left:12px; vertical-align:middle;">
                                        <div
                                            style="font-size:15px; font-weight:600; letter-spacing:-0.01em; color:#0a0a0a; line-height:1.3;">
                                            Félix Korbendau</div>
                                        <div
                                            style="font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace; font-size:10px; letter-spacing:0.14em; text-transform:uppercase; color:#8a938f; line-height:1.4;">
                                            Formulaire de contact</div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding:0 32px;">
                            <div style="border-top:1px solid #e9ebe9; line-height:0; font-size:0;">&nbsp;</div>
                        </td>
                    </tr>

                    {{-- Eyebrow : statut + horodatage --}}
                    <tr>
                        <td style="padding:20px 32px 0;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td
                                        style="font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace; font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:#1fb890; font-weight:600;">
                                        ● Nouveau message
                                    </td>
                                    <td align="right"
                                        style="font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace; font-size:11px; letter-spacing:0.04em; color:#8a938f;">
                                        {{ now()->locale('fr')->translatedFormat('d M Y · H:i') }}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    {{-- Carte terminal --}}
                    <tr>
                        <td style="padding:16px 32px 32px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                                bgcolor="#0e1211"
                                style="background-color:#0e1211; border:1px solid rgba(255,255,255,0.07); border-top:3px solid #1fb890; border-radius:12px;">
                                <tr>
                                    <td style="padding:24px 24px 20px;">

                                        {{-- Champ : De --}}
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                            border="0">
                                            <tr>
                                                <td width="90"
                                                    style="font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace; font-size:11px; letter-spacing:0.1em; text-transform:uppercase; color:#8a938f; vertical-align:top; padding:6px 0;">
                                                    De</td>
                                                <td
                                                    style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; font-size:15px; color:#ffffff; font-weight:500; vertical-align:top; padding:6px 0;">
                                                    {{ $name }}</td>
                                            </tr>
                                            <tr>
                                                <td width="90"
                                                    style="font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace; font-size:11px; letter-spacing:0.1em; text-transform:uppercase; color:#8a938f; vertical-align:top; padding:6px 0;">
                                                    Email</td>
                                                <td
                                                    style="font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace; font-size:14px; vertical-align:top; padding:6px 0;">
                                                    <a href="mailto:{{ $email }}"
                                                        style="color:#4fd6b4; text-decoration:none;">{{ $email }}</a>
                                                </td>
                                            </tr>
                                        </table>

                                        <div
                                            style="border-top:1px solid rgba(255,255,255,0.08); margin:18px 0; line-height:0; font-size:0;">
                                            &nbsp;</div>

                                        {{-- Message --}}
                                        <div
                                            style="font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace; font-size:11px; letter-spacing:0.1em; text-transform:uppercase; color:#8a938f; margin-bottom:10px;">
                                            Message</div>
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                            border="0" bgcolor="#141918"
                                            style="background-color:#141918; border-radius:8px;">
                                            <tr>
                                                <td
                                                    style="padding:16px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; font-size:14px; line-height:1.6; color:#c9cdcb;">
                                                    {!! nl2br(e($body)) !!}
                                                </td>
                                            </tr>
                                        </table>

                                        {{-- CTA --}}
                                        <table role="presentation" cellpadding="0" cellspacing="0" border="0"
                                            style="margin-top:22px;">
                                            <tr>
                                                <td bgcolor="#1fb890" style="border-radius:6px;">
                                                    <a href="mailto:{{ $email }}?subject={{ rawurlencode('Re: votre message via felixkorbendau.fr') }}"
                                                        style="display:inline-block; padding:11px 20px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; font-size:14px; font-weight:600; letter-spacing:0.01em; color:#06110d; text-decoration:none;">
                                                        Répondre à {{ $name }}
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>

                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    {{-- Footer --}}
                    <tr>
                        <td style="padding:0 32px 28px; text-align:center;">
                            <span
                                style="font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace; font-size:11px; letter-spacing:0.04em; color:#a9aeab;">
                                Envoyé automatiquement depuis le formulaire de contact de felixkorbendau.fr
                            </span>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>

</html>
