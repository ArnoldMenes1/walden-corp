// =========================================================
// Walden Corp Design System — Theme Flutter v1.0.1
// =========================================================

import 'package:flutter/material.dart';

class WaldenColors {
  WaldenColors._();

  // Primitives
  static const Color blue950 = Color(0xFF0F2052);
  static const Color blue800 = Color(0xFF1E3A8A);
  static const Color blue990 = Color(0xFF081331);

  static const Color silver300 = Color(0xFFC0C0C0);
  static const Color silver200 = Color(0xFFE4E4E7);
  static const Color silver400 = Color(0xFFA1A1AA);

  static const Color black900 = Color(0xFF1C1C1E);
  static const Color white0   = Color(0xFFFFFFFF);

  static const Color gray50  = Color(0xFFFAFAFA);
  static const Color gray100 = Color(0xFFF4F4F5);
  static const Color gray200 = Color(0xFFE4E4E7);
  static const Color gray300 = Color(0xFFD4D4D8);
  static const Color gray400 = Color(0xFFA1A1AA);
  static const Color gray500 = Color(0xFF71717A);
  static const Color gray600 = Color(0xFF52525B);
  static const Color gray700 = Color(0xFF3F3F46);
  static const Color gray800 = Color(0xFF27272A);
  static const Color gray900 = Color(0xFF18181B);
  static const Color gray950 = Color(0xFF0F0F11);

  static const Color green700 = Color(0xFF15803D);
  static const Color green100 = Color(0xFFDCFCE7);
  static const Color amber700 = Color(0xFFB45309);
  static const Color amber100 = Color(0xFFFEF3C7);
  static const Color red700   = Color(0xFFB91C1C);
  static const Color red100   = Color(0xFFFEE2E2);
  static const Color info500  = Color(0xFF1D4ED8);
  static const Color info100  = Color(0xFFDBEAFE);
}

class WaldenSpacing {
  WaldenSpacing._();
  static const double s0  = 0;
  static const double s1  = 4;
  static const double s2  = 8;
  static const double s3  = 12;
  static const double s4  = 16;
  static const double s5  = 20;
  static const double s6  = 24;
  static const double s8  = 32;
  static const double s10 = 40;
  static const double s12 = 48;
  static const double s16 = 64;
  static const double s20 = 80;
  static const double s24 = 96;
}

class WaldenRadius {
  WaldenRadius._();
  static const double none = 0;
  static const double xs   = 2;
  static const double sm   = 4;
  static const double md   = 8;
  static const double lg   = 12;
  static const double xl   = 16;
  static const double xxl  = 24;
  static const double full = 9999;
}

class WaldenTypography {
  WaldenTypography._();

  static const String fontFamily     = 'Inter';
  static const String fontFamilyMono = 'JetBrains Mono';

  static const double displayXl = 48;
  static const double displayLg = 40;
  static const double heading1  = 32;
  static const double heading2  = 24;
  static const double heading3  = 20;
  static const double heading4  = 18;
  static const double bodyLg    = 18;
  static const double bodyMd    = 16;
  static const double bodySm    = 14;
  static const double label     = 14;
  static const double caption   = 13;
  static const double micro     = 12;
  static const double code      = 14;

  static const FontWeight regular  = FontWeight.w400;
  static const FontWeight medium   = FontWeight.w500;
  static const FontWeight semibold = FontWeight.w600;
}

class WaldenElevation {
  WaldenElevation._();

  static const List<BoxShadow> none = [];

  static const List<BoxShadow> level1 = [
    BoxShadow(color: Color(0x0F000000), offset: Offset(0, 1), blurRadius: 2),
    BoxShadow(color: Color(0x1A000000), offset: Offset(0, 1), blurRadius: 3),
  ];

  static const List<BoxShadow> level2 = [
    BoxShadow(color: Color(0x0F000000), offset: Offset(0, 2), blurRadius: 4),
    BoxShadow(color: Color(0x14000000), offset: Offset(0, 4), blurRadius: 8),
  ];

  static const List<BoxShadow> level3 = [
    BoxShadow(color: Color(0x14000000), offset: Offset(0, 4), blurRadius: 8),
    BoxShadow(color: Color(0x1A000000), offset: Offset(0, 8), blurRadius: 16),
  ];

  static const List<BoxShadow> level4 = [
    BoxShadow(color: Color(0x1A000000), offset: Offset(0, 8), blurRadius: 16),
    BoxShadow(color: Color(0x1F000000), offset: Offset(0, 16), blurRadius: 32),
  ];
}

class WaldenMotion {
  WaldenMotion._();

  static const Duration instant = Duration(milliseconds: 0);
  static const Duration fast    = Duration(milliseconds: 100);
  static const Duration base    = Duration(milliseconds: 150);
  static const Duration medium  = Duration(milliseconds: 200);
  static const Duration slow    = Duration(milliseconds: 300);
  static const Duration long    = Duration(milliseconds: 400);

  static const Curve standard = Cubic(0.2, 0, 0, 1);
  static const Curve entrance = Cubic(0, 0, 0.2, 1);
  static const Curve exit     = Cubic(0.4, 0, 1, 1);
  static const Curve linear   = Curves.linear;
}

class WaldenTheme {
  WaldenTheme._();

  static ThemeData light() {
    return ThemeData(
      brightness: Brightness.light,
      fontFamily: WaldenTypography.fontFamily,
      scaffoldBackgroundColor: WaldenColors.white0,
      colorScheme: const ColorScheme.light(
        primary: WaldenColors.blue950,
        onPrimary: WaldenColors.white0,
        secondary: WaldenColors.silver300,
        onSecondary: WaldenColors.black900,
        surface: WaldenColors.white0,
        onSurface: WaldenColors.black900,
        error: WaldenColors.red700,
        onError: WaldenColors.white0,
      ),
      appBarTheme: const AppBarTheme(
        backgroundColor: WaldenColors.white0,
        foregroundColor: WaldenColors.black900,
        elevation: 0,
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: WaldenColors.blue950,
          foregroundColor: WaldenColors.white0,
          padding: const EdgeInsets.symmetric(
            horizontal: WaldenSpacing.s4,
            vertical: WaldenSpacing.s3,
          ),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(WaldenRadius.md),
          ),
        ),
      ),
    );
  }

  static ThemeData dark() {
    return ThemeData(
      brightness: Brightness.dark,
      fontFamily: WaldenTypography.fontFamily,
      scaffoldBackgroundColor: WaldenColors.gray950,
      colorScheme: const ColorScheme.dark(
        primary: WaldenColors.silver300,
        onPrimary: WaldenColors.black900,
        secondary: WaldenColors.gray400,
        onSecondary: WaldenColors.gray50,
        surface: WaldenColors.gray900,
        onSurface: WaldenColors.gray50,
        error: Color(0xFFFCA5A5),
        onError: WaldenColors.black900,
      ),
    );
  }
}
